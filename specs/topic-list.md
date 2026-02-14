# Topic List

A **Topic list** is the collection of [topics](topic.md) that define a knowledge domain declared by a particular **issuer**.

## Required content

The following content must be included in the list.

- Issuer
- Signature
- Version
- Topics List
- Timestamp

## Signed

The topic list is signed by the issuer with each release of a version to enable verification.

- Prevents tampering of [transcript records](transcript-entry.md).
- Prevents record loss if an **issuer** is no longer available.

## Distributable

A topic list originates from the issuer.

- It is served **publicly** with minimal restriction.
- It may be redistributed by other parties.

This enables:

- Shared schema by multiple parties, discouraging overlap.
- Redundancy through storage across multiple services.

## Dependencies

A list may import topics from another list by declaring it as a dependency.

- A dependency is indicated using a colon `:`.
- Dependencies may be used in full name or assigned a shorthand reference.
- Imported topics may only be used as pretopics.
- All direct and imported topics may be assigned proficiency scores.

The below example illustrates importing the `thecorestandards` list, then assigns `tcs` as shorthand.
It then creates an owned topic called `arithmetic-in-circuits` that uses topics from that list.

```mermaid
flowchart BT

  arithmetic-in-circuits[/"arithmetic-in-circuits"\]

    addition[/"tcs:addition"\] -.-x arithmetic-in-circuits
    subtraction[/"tcs:subtraction"\] -.-x arithmetic-in-circuits
    multiplication[/"tcs:multiplication"\] -.-x arithmetic-in-circuits
    division[/"tcs:division"\] -.-x arithmetic-in-circuits

  %% Dependencies
  subgraph dependencies
    thecorestandards@{ shape: docs, label: "tcs<br/>thecorestandards" }
  end
```

# Examples

### Simple table

The topic list can be shared as a simple `.csv` in a table format.

| topic          | subtopics                                       | pretopics |
| -------------- | ----------------------------------------------- | --------- |
| numbers        | -                                               | -         |
| addition       | -                                               | numbers   |
| subtraction    | -                                               | numbers   |
| multiplication | -                                               | numbers   |
| division       | -                                               | numbers   |
| arithmetic     | addition, subtraction, multiplication, division | -         |

### JSON

The below example imports `thecorestandards` list. It uses the `numbers` topic to define arithmetic-related topics.

<!-- prettier-ignore -->
```json
{
  "issuer": "...",
  "signature": "...",
  "version": "...",
  "timestamp": "...",
  "topics": {
    "addition": {
      "pretopics": ["tcs:numbers"]
    },
    "subtraction": {
      "pretopics": ["tcs:numbers"]
    },
    "multiplication": {
      "pretopics": ["tcs:numbers"]
    },
    "division": {
      "pretopics": ["tcs:numbers"]
    },
    "arithmetic-in-circuits": {
      "subtopics": [
        "addition",
        "subtraction",
        "multiplication",
        "division"
      ]
    }
  },
  "dependencies": {
    "tcs": "thecorestandards"
  }
}
```

### YAML

The below example imports `thecorestandards` list. It uses the arithmetic-related topics from it instead of self-defining.

```yaml
timestamp: "..."
issuer: "..."
signature: "..."
version: "..."
topics:
  arithmetic-in-circuits:
    subtopics:
      - tcs:addition
      - tcs:subtraction
      - tcs:multiplication
      - tcs:division
dependencies:
  tcs: thecorestandards
```
