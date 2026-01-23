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

### Example - YAML

The below example defines required proficiencies (topics with a minimum proficiency score) for 3 levels of a "math teacher" role.

```yaml
timestamp: "..."
issuer: "national-teachers-association"
signature: "..."
version: "..."
proficiency-levels:
  math-teacher-junior:
    pretopics:
      - "tcs:basic-math"
      - "nta:classroom-management"
  
  math-teacher:
    pretopics:
      - "nta:lesson-planning"
      - "nta:lesson-customization"
  
  math-teacher-senior:
    pretopics:
      - "nta:teacher-mentoring"
      - "nta:curriculum-development"

dependencies:
  tcs: the-core-standards
  nta: national-teachers-association
```

# Examples

## Math teacher job role

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

  basic-math -.-x math-teacher-junior
  classroom-management -.-x math-teacher-junior

  lesson-planning -.-x math-teacher
  lesson-customization -.-x math-teacher

  teacher-mentoring -.-x math-teacher-senior
  curriculum-development -.-x math-teacher-senior
```

> [!NOTE]
> This example role may might pull from multiple topic lists from different domains, like mathematics and pedagogy.

## Arithmetic Level - Numeric

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

> [!NOTE]
> This role may align closely to a topic like `arithmetic` providing a more "human" way of referring to a user's proficiency in that area.



## Arithmetic Level - Categorical
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