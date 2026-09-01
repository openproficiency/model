import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { describe, it } from "node:test";

import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { parse } from "yaml";

const examplesDirectory = new URL("../examples/", import.meta.url);
const schemasDirectory = new URL("../schemas/", import.meta.url);
const schemaBaseUrl =
  "https://raw.githubusercontent.com/openproficiency/model/refs/heads/main/schemas/";
const semanticVersion =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

async function readJson(fileName) {
  return JSON.parse(await readFile(new URL(fileName, schemasDirectory), "utf8"));
}

async function createValidator(schemaFile) {
  const ajv = new Ajv2020({
    loadSchema: async (url) => readJson(url.slice(schemaBaseUrl.length)),
  });
  addFormats(ajv);
  ajv.addFormat("kebab-case", /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  ajv.addFormat("semver", semanticVersion);

  return ajv.compileAsync(await readJson(schemaFile));
}

async function readExample(fileName) {
  return parse(await readFile(new URL(fileName, examplesDirectory), "utf8"));
}

function ignorePlaceholderSignatures(value) {
  if (Array.isArray(value)) {
    return value.map(ignorePlaceholderSignatures);
  }

  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [
        key,
        key === "signature" && child !== null
          ? null
          : ignorePlaceholderSignatures(child),
      ]),
    );
  }

  return value;
}

async function validateExample(exampleFile, schemaFile) {
  const example = ignorePlaceholderSignatures(await readExample(exampleFile));
  const validate = await createValidator(schemaFile);

  return {
    valid: validate(example),
    errors: validate.errors,
  };
}

describe("examples match schemas", () => {
  it("validate math score interpretation list", async () => {
    // Description
    // Verifies the math score interpretation list conforms to its schema.

    // Arrange
    const exampleFile = "score-interpretation-list/math.yaml";
    const schemaFile = "score-interpretation-list.schema.json";

    // Act
    const result = await validateExample(exampleFile, schemaFile);

    // Assert
    assert.equal(result.valid, true, JSON.stringify(result.errors, null, 2));
  });

  it("validate math teacher score interpretation list", async () => {
    // Description
    // Verifies the math teacher score interpretation list conforms to its schema.

    // Arrange
    const exampleFile = "score-interpretation-list/math-teacher-levels.yaml";
    const schemaFile = "score-interpretation-list.schema.json";

    // Act
    const result = await validateExample(exampleFile, schemaFile);

    // Assert
    assert.equal(result.valid, true, JSON.stringify(result.errors, null, 2));
  });

  it("validate math topic list", async () => {
    // Description
    // Verifies the math topic list conforms to its schema.

    // Arrange
    const exampleFile = "topic-list/math.yaml";
    const schemaFile = "topic-list.schema.json";

    // Act
    const result = await validateExample(exampleFile, schemaFile);

    // Assert
    assert.equal(result.valid, true, JSON.stringify(result.errors, null, 2));
  });

  it("validate binary math topic list", async () => {
    // Description
    // Verifies the binary math topic list conforms to its schema.

    // Arrange
    const exampleFile = "topic-list/binary-math.yaml";
    const schemaFile = "topic-list.schema.json";

    // Act
    const result = await validateExample(exampleFile, schemaFile);

    // Assert
    assert.equal(result.valid, true, JSON.stringify(result.errors, null, 2));
  });

  it("validate addition transcript entry", async () => {
    // Description
    // Verifies the addition transcript entry conforms to its schema.

    // Arrange
    const exampleFile = "transcript-entry/user-addition-score.yaml";
    const schemaFile = "transcript-entry.schema.json";

    // Act
    const result = await validateExample(exampleFile, schemaFile);

    // Assert
    assert.equal(result.valid, true, JSON.stringify(result.errors, null, 2));
  });

  it("validate math scores transcript", async () => {
    // Description
    // Verifies the math scores transcript conforms to its schema.

    // Arrange
    const exampleFile = "transcript/user-math-scores.yaml";
    const schemaFile = "transcript.schema.json";

    // Act
    const result = await validateExample(exampleFile, schemaFile);

    // Assert
    assert.equal(result.valid, true, JSON.stringify(result.errors, null, 2));
  });
});
