# Proficiency Level

A **Proficiency Level** is standardized interpretation for a collection of proficiency scores. This allows [issuers](issuer.md) to collaborate and provide a shared way of referring to [proficiency scores](proficiency-score.md) in their area of expertise.

Common use cases:

- Human friendly wording for a particular topic.
- Proficiency of a Job role.

> [!CAUTION]
> Proficiency levels must not represent [topics](topic-list.md) since they cannot be directly assigned a [score](proficiency-score.md).

## Definition

A proficiency level is defined similar to a [topic list](topic-list.md) except that it uses the keyword `proficiency-levels` instead of `topics`.

- It may only have pretopics, no subtopics.
- It may only reference [imported topics](topic-list.md), not other proficiency levels.
- It cannot be directly assigned a [score](proficiency-score.md).
- Multiple proficiency level definitions may be applied together. They only superimpose additional information.

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

```yaml
issuer: "national-teachers-association"
timestamp: "..."
certificate: "..."
version: "..."

proficiency-levels:
  math-teacher-junior:
    pretopics:
      - "tcs-math.basic-math"
      - "nta-pedagogy.classroom-management"

  math-teacher:
    pretopics:
      - "nta-pedagogy.lesson-planning"
      - "nta-pedagogy.lesson-customization"

  math-teacher-senior:
    pretopics:
      - "nta-pedagogy.teacher-mentoring"
      - "nta-pedagogy.curriculum-development"

dependencies:
  tcs-math: "https://thecorestandards.com/topics-lists/math.json@0.1.0"
  nta-pedagogy: "https://national-teachers-association.com/topics-lists/pedagogy.json@0.1.0"
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
    tcs-math@{ shape: docs, label: "tcs-math<br/>thecorestandards/math@0.1.0" }
    nta-pedagogy@{ shape: docs, label: "nta-pedagogy<br/>national-teachers-association/pedagogy@0.1.0" }
  end

  %% Mapping
  tcs-math -.- basic-math -.-x math-teacher-junior
  nta-pedagogy -.- classroom-management -.-x math-teacher-junior

  nta-pedagogy -.- lesson-planning -.-x math-teacher
  nta-pedagogy -.- lesson-customization -.-x math-teacher

  nta-pedagogy -.- teacher-mentoring -.-x math-teacher-senior
  nta-pedagogy -.- curriculum-development -.-x math-teacher-senior
```
