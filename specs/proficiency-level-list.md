# Proficiency Level List

A **Proficiency Levels List** is a collection of [proficiency levels](proficiency-level.md) that imply order via their naming or their required proficiencies.

- Multiple proficiency level list may be applied in parallel, since they only provide an interpretation of the proficiency scores.

### Requirements

A proficiency levels list uses the same structure as a [topic list](topic-list.md).

- Uses the keyword `proficiency-levels` instead of `topics`.
- Same [identification](topic-list.md#topic-identifiers) requirements.
- Same [distribution](topic-list.md#distributable) requirements
- Same [signature](topic-list.md#signed) requirements.
- Same [dependencies](topic-list.md#dependencies) requirements.

### Arithmetic Level - Numeric

```mermaid
flowchart BT

   subgraph Topics
      t_addition[/addition\]
      t_subtraction[/subtraction\]

      t_multiplication[/multiplication\]
      t_division[/division\]

      t_exponents[/exponents\]
      t_roots[/roots\]
   end

   subgraph Proficiency Level
      plvl_1{{"Arithmetic<br/>✨ Level 1"}}
      plvl_2{{"Arithmetic<br/>✨ Level 2"}}
      plvl_3{{"Arithmetic<br/>✨ Level 3"}}
   end

   t_addition -.-x plvl_1
   t_subtraction -.-x plvl_1

   t_multiplication -.-x plvl_2
   t_division -.-x plvl_2

   t_exponents -.-x plvl_3
   t_roots -.-x plvl_3
```

### Arithmetic Level - Categorical

```mermaid
flowchart BT

   subgraph Topics
      t_addition[/addition\]
      t_subtraction[/subtraction\]

      t_multiplication[/multiplication\]
      t_division[/division\]

      t_exponents[/exponents\]
      t_roots[/roots\]
   end

   subgraph Proficiency Level
      plvl_beginner{{"Arithmetic<br/>✨ Beginner"}}
      plvl_intermediate{{"Arithmetic<br/>✨ Intermediate"}}
      plvl_advanced{{"Arithmetic<br/>✨ Advanced"}}
   end

   t_addition -.-x plvl_beginner
   t_subtraction -.-x plvl_beginner

   t_multiplication -.-x plvl_intermediate
   t_division -.-x plvl_intermediate

   t_exponents -.-x plvl_advanced
   t_roots -.-x plvl_advanced
```

# Examples

The below example defines required proficiencies (topics with a minimum score of `proficient`) for 3 levels of a "math teacher" role.

### YAML

<!-- prettier-ignore -->
```yaml
owner: "example.com"
name: "math-teacher-levels"
description: "..."
version: "0.1.0"
timestamp: "2026-01-26T01:00:00Z",
certificate: "-----BEGIN CERTIFICATE-----ABC123DEF456-----END CERTIFICATE-----",

proficiency-levels:
  math-teacher-junior:
    pretopics:
      - "std-math.basic-math"
      - "std-pedagogy.classroom-management"

  math-teacher:
    pretopics:
      - "std-pedagogy.lesson-planning"
      - "std-pedagogy.lesson-customization"

  math-teacher-senior:
    pretopics:
      - "std-pedagogy.teacher-mentoring"
      - "std-pedagogy.curriculum-development"

dependencies:
  std-math: "https://example.com/topics-lists/math.json@0.1.0"
  std-pedagogy: "https://example.com/topics-lists/pedagogy.json@0.1.0"
```

### JSON

<!-- prettier-ignore -->
```json
{
  "$schema": "https://raw.githubusercontent.com/openproficiency/model/refs/heads/main/schemas/proficiency-levels-list.schema.json",

  "owner": "example.com",
  "name": "math-teacher-levels",
  "description": "...",
  "version": "0.1.0",
  "timestamp": "2026-01-26T01:00:00Z",
  "certificate": "-----BEGIN CERTIFICATE-----ABC123DEF456-----END CERTIFICATE-----",

  "proficiency-levels": {
    "math-teacher-junior": {
      "pretopics": [
        "std-math.basic-math",
        "std-pedagogy.classroom-management"
      ]
    },

    "math-teacher": {
      "pretopics": [
        "std-pedagogy.lesson-planning",
        "std-pedagogy.lesson-customization"
      ]
    },

    "math-teacher-senior": {
      "pretopics": [
        "std-pedagogy.teacher-mentoring",
        "std-pedagogy.curriculum-development"
      ]
    }
  },

  "dependencies": {
    "std-math": "https://example.com/topics-lists/math.json@0.1.0",
    "std-pedagogy": "https://example.com/topics-lists/pedagogy.json@0.1.0"
  }
}
```

```mermaid
  flowchart BT

  subgraph Topics
    basic-math[/basic-math\]
    classroom-management[/classroom-management\]

    lesson-planning[/lesson-planning\]
    lesson-customization[/lesson-customization\]

    teacher-mentoring[/teacher-mentoring\]
    curriculum-development[/curriculum-development\]
  end

  subgraph Proficiency Level
    direction BT
    math-teacher-junior{{"Junior Math Teacher"}}
    math-teacher{{"Math Teacher<br/>"}}
    math-teacher-senior{{"Senior Math Teacher<br/>"}}
  end

  %% Dependencies
  subgraph dependencies
    std-math@{ shape: docs, label: "std-math<br/>example.com/math@0.1.0" }
    std-pedagogy@{ shape: docs, label: "std-pedagogy<br/>example.com/pedagogy@0.1.0" }
  end

  %% Mapping
  std-math -.- basic-math -.-x math-teacher-junior
  std-pedagogy -.- classroom-management -.-x math-teacher-junior

  std-pedagogy -.- lesson-planning -.-x math-teacher
  std-pedagogy -.- lesson-customization -.-x math-teacher

  std-pedagogy -.- teacher-mentoring -.-x math-teacher-senior
  std-pedagogy -.- curriculum-development -.-x math-teacher-senior
```
