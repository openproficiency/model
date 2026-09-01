---
description: Test conventions for schemas and examples
applyTo: "tests/**/*.test.mjs"
---

# Unit tests

- Use `node:test` and `node:assert/strict`.
- Tests are ideally independent.
- Do not use mocking.
- Do not use loops. If there are multiple situations to check for a test, use the variable name to describe each.
- Too many situations in a single test means it is doing too much. Break it up into multiple tests.

## Structure

Every test must have four clearly labeled sections:

1. `Description` states the behavior the test verifies.
2. `Arrange` declares the inputs and expected results.
3. `Act` invokes the code under test.
4. `Assert` verifies the result.

The section containing a failure identifies its type:

- A failure in `Arrange` means the test setup is invalid.
- A failure in `Act` means the code under test did not execute correctly.
- A failure in `Assert` means execution completed, but the result was not
  expected.

```ts
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

describe('methodName', () => {
  it('check positive numbers', () => {
    // Verifies that 2 positive numbers sum correctly

    // Arrange
    const posNumberA = 4;
    const posNumberB = 2;

    // Act
    const result = posNumberA + posNumberB;

    // Assert - correct result
    assert.strictEqual(result, 6);
  });
});
```
