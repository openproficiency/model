# Proficiency Score

A **Proficiency Score** is a number indicating the degree of understanding for a specific [experience topic](experience-topic.md).

- The score is between `0.0` and `1.0`:
  - A score of `0.0` indicates "No awareness" of the topic.
  - A score `1.0` indicates "full understanding" of the topic.
- The default process is **implicit** scoring unless an **explicit** scoring process is defined.

## Implicit Scoring (default)

Some topics can be simple and hence obtain proficiency by familiary and basic usage.

- `0.0`: Unaware - Does not know of the topic's existance.
- `0.1`: Aware - No knowledge of the topic.
- `0.5`: Familiar - Theoretical understanding.
- `0.8`: Applied - Has practically used the knowledge.
  - Minimumum threshold for use as a [pretopic](experience-topic.md).
- `1.0`: Proficient - Used enough to consider "fundamental".

> [!IMPORTANT]
> The score between **applied** (0.8) and **proficient** (1.0) is subjective. This provides room for customization. Example: A scoring process considering **recency** or **complexity**.

## Upward Score Propagation

A topic calculates its score from its subtopics. It is the normalized sum of the subtopics.

```mermaid
flowchart BT
arithmatic[/0.625<br/>arithmatic\]

addition[/"1.0<br/>addition"\] --> arithmatic
subtraction[/1.0<br/>subtraction\] --> arithmatic
multiplication[/0.5<br/>multiplication\] --> arithmatic
division[/0.0<br/>division\] --> arithmatic
```

Explanation:

`0.55` = (`0.8` + `0.8` + `0.5` + `0.1`) / 4

## Downward Score Propagation

Assigning a score to a group topic affects all of its subtopics equally. It does not affect any pretopics.

```mermaid
flowchart BT
arithmatic[/0.8<br/>arithmatic\]

addition[/"0.8<br/>addition"\] --> arithmatic
subtraction[/0.8<br/>subtraction\] --> arithmatic
multiplication[/0.8<br/>multiplication\] --> arithmatic
division[/0.8<br/>division\] --> arithmatic

numbers[/1.0<br/>numbers\] -.-x addition
```

# Explicit Scoring

Explicit scoring can be helpful for getting started. In the beginning, it may be burdensome or impossible to confidently define the topics and relationships via  subtopics/pretopics.

In this case, a topic can be internally organized into phases. As each phase is completed the proficiency score is increased.

- The max possible explicit score is `0.8`.
- A phase is complete if all its topics have a minimum score of `0.8`.

> [!IMPORTANT]
> Downward score propagation does not apply to explicit scoring.

### Example

```mermaid
flowchart BT

subgraph prereq["Prerequisites"]
  numbers1[/Numerals\]
end

subgraph arithmatic["Topic: Arithmatic"]
  direction BT

  subgraph level1["Phase 1, Score: 0.5"]
    direction BT
    add[/Addition\]
    subtract[/Subtraction\]
  end

  subgraph level2["Phase 2, Score: 0.8"]
    direction BT
    multiplication[/Multiplication\]
    division[/Division\]
  end

  level1 -->
  level2
end

prereq -.-x arithmatic
```