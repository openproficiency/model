import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { describe, it } from "node:test";

const schemasDirectory = new URL("../schemas/", import.meta.url);

async function parseSchema(fileName) {
  return JSON.parse(
    await readFile(new URL(fileName, schemasDirectory), "utf8"),
  );
}

describe("schema JSON syntax", () => {

  it("parses score interpretation list schema", async () => {
    // Description
    // Verifies the score interpretation list schema uses valid JSON syntax.

    // Arrange
    const schemaFile = "score-interpretation-list.schema.json";

    // Act
    const schema = await parseSchema(schemaFile);

    // Assert
    assert.equal(typeof schema, "object");
  });

  it("parses score interpretation schema", async () => {
    // Description
    // Verifies the score interpretation schema uses valid JSON syntax.

    // Arrange
    const schemaFile = "score-interpretation.schema.json";

    // Act
    const schema = await parseSchema(schemaFile);

    // Assert
    assert.equal(typeof schema, "object");
  });

  it("parses topic list schema", async () => {
    // Description
    // Verifies the topic list schema uses valid JSON syntax.

    // Arrange
    const schemaFile = "topic-list.schema.json";

    // Act
    const schema = await parseSchema(schemaFile);

    // Assert
    assert.equal(typeof schema, "object");
  });

  it("parses topic schema", async () => {
    // Description
    // Verifies the topic schema uses valid JSON syntax.

    // Arrange
    const schemaFile = "topic.schema.json";

    // Act
    const schema = await parseSchema(schemaFile);

    // Assert
    assert.equal(typeof schema, "object");
  });

  it("parses transcript entry verification schema", async () => {
    // Description
    // Verifies the transcript entry verification schema uses valid JSON syntax.

    // Arrange
    const schemaFile = "transcript-entry-verification.schema.json";

    // Act
    const schema = await parseSchema(schemaFile);

    // Assert
    assert.equal(typeof schema, "object");
  });

  it("parses transcript entry schema", async () => {
    // Description
    // Verifies the transcript entry schema uses valid JSON syntax.

    // Arrange
    const schemaFile = "transcript-entry.schema.json";

    // Act
    const schema = await parseSchema(schemaFile);

    // Assert
    assert.equal(typeof schema, "object");
  });

  it("parses transcript schema", async () => {
    // Description
    // Verifies the transcript schema uses valid JSON syntax.

    // Arrange
    const schemaFile = "transcript.schema.json";

    // Act
    const schema = await parseSchema(schemaFile);

    // Assert
    assert.equal(typeof schema, "object");
  });
});
