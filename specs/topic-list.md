# Topic List

A **Topic list** is the collection of [topics](topic.md) that define a knowledge domain declared by a particular **issuer**.

## Required content

The following content must be included in the list.

- Name - A namespace to associate the topics. Case insensitive. No special characters.
- Description - A brief description of the knowledge domain covered by this topic list.
- Version - Any indicator to unique identify the version of the list.
- Issuer - The owner of this topic list.
- Timestamp - The time with the list was created and assigned a version number.
- Certificate - Verification from the issuer that the list is unmodified.
- Topics - A dictionary of [Topic](topic.md) objects.
- Dependencies - A list of URIs to required topic lists.

## Topic Identifiers

Because all [topics](topic.md) have the same significance, any hierarchy implied from its
position in the list should not be considered rigid. All identifiers must be fully unique
within the namespace of the topic list.

This provides:

- downstream topic lists can reference topics without long notation
- reorganization of topics without breaking changes (need to recompute proficiency scores)

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

- Imported topics may only be used as pretopics.
- The dependency source is provided as a full URL, including version. Example `https://thecorestandards.com/topiclists/math.json@0.1.0`
- Dependencies are assigned a local namespace and referenced using `.` notation.
- All direct and imported topics may be assigned proficiency scores.

The below example illustrates importing the `thecorestandards/math` list, and assigning it the local `tcs-math` namespace.
It then creates an owned topic called `arithmetic-in-circuits` that uses topics from that list.

```mermaid
flowchart BT

  arithmetic-in-circuits[/"arithmetic-in-circuits"\]

    addition[/"tcs-math.addition"\] -.-x arithmetic-in-circuits
    subtraction[/"tcs-math.subtraction"\] -.-x arithmetic-in-circuits
    multiplication[/"tcs-math.multiplication"\] -.-x arithmetic-in-circuits
    division[/"tcs-math.division"\] -.-x arithmetic-in-circuits

  %% Dependencies
  subgraph dependencies
    tcs-math@{ shape: docs, label: "tcs-math<br/>thecorestandards/math@0.1.0" }
  end
```

# Examples

### JSON

The below example imports `thecorestandards/math` list.
It defines several prerequisites from common math for understanding binary math.

<!-- prettier-ignore -->
```json
{
  "name": "binary-math",
  "description": "...",
  "version": "...",
  "issuer": "...",
  "certificate": "...",
  "timestamp": "...",
  "topics": {
    "binary-addition": {
      "description": "...",
      "pretopics": ["tcs-math.addition"]
    },
    "binary-subtraction": {
      "description": "...",
      "pretopics": ["tcs-math.subtraction"]
    },
    "binary-multiplication": {
      "description": "...",
      "pretopics": ["tcs-math.multiplication"]
    },
    "binary-division": {
      "description": "...",
      "pretopics": ["tcs-math.division"]
    },
    "binary-arithmetic": {
      "description": "Application of electrical circuits to perform basic math operations.",
      "subtopics": [
        "binary-addition",
        "binary-subtraction",
        "binary-multiplication",
        "binary-division"
      ]
    }
  },
  "dependencies": {
    "tcs-math": "https://thecorestandards.com/topics-lists/math.json@0.1.0"
  }
}
```

### YAML

The below example imports the `math` list. It uses the arithmetic-related topics from it instead of self-defining.

```yaml
name: "binary-math"
description: "..."
issuer: "..."
version: "..."
certificate: "..."
timestamp: "..."
topics:
  binary-addition:
    description: ...
    pretopics:
      - tcs-math.addition
  binary-subtraction:
    description: ...
    pretopics:
      - tcs-math.subtraction
  binary-multiplication:
    description: ...
    pretopics:
      - tcs-math.multiplication
  binary-division:
    description: ...
    pretopics:
      - tcs-math.division
  binary-arithmetic:
    description: Application of electrical circuits to perform basic math operations.
    subtopics:
      - binary-addition
      - binary-subtraction
      - binary-multiplication
      - binary-division
dependencies:
  tcs-math: https://thecorestandards.com/topics-lists/math.json@0.1.0
```
