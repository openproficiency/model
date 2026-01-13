# Design

Below are diagram components to help clarify the relationship between topics, for describing relationships of a knowledge domain.

## Topics

### Topic

A trapazoidal "building block" represents a single **topic**.

```mermaid
flowchart BT
  topic[/"topic"\]
```

### Subtopic

A solid line and arrow specifies one **subtopic** in a **group topic**.

```mermaid
flowchart BT
  topic[/"topic"\]
  subtopic[/"subtopic"\] --> topic
```

### Pretopic

A dashed line and `x` specifies a **pretopic** for another **topic**.

```mermaid
flowchart BT
  topic[/"topic"\]

  pretopic[/"preq. topic"\] -.-x topic
```

### Proficiency Score

A **proficiency** score is shown as a number above the text of a **topic**.

```mermaid
flowchart BT
  topic[/"0.5<br/>topic"\]
```

### Topic List

```mermaid
flowchart BT
  A@{ shape: docs, label: "topic list" }
```
