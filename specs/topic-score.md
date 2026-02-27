# Topic Score

A **Topic Score** is an assessment indicating the degree of understanding for a specific [topic](topic.md), from no awareness of the subject to fluent usage of it.

## Score Options

Some topics can be simple and hence obtain proficiency by familiarity and basic usage.

- `Unaware`: Does not know of the topic's existence.
- `Aware`: Ability to recognize the topic.
- `Familiar`: Theoretical understanding.
- `Competent`: Practically apply in standard scenarios.
  - Minimum threshold for use as a [pretopic](topic.md#types-of-topics).
- `Fluent`: Can consistently apply in new scenarios.

## Upward Score Propagation

If a topic has subtopics, its score is calculated from its subtopics.

```mermaid
flowchart BT

arithmetic@{ shape: trapezoid, label: "arithmetic<br/>
<div style='display: flex;'>
<div style='padding:0em 0.3em'>▪️<br/>unaware<br/>0%</div>
<div style='padding:0em 0.3em'>🌱<br/>aware<br/>25%</div>
<div style='padding:0em 0.3em'>🌿<br/>familiar<br/>25%</div>
<div style='padding:0em 0.3em'>🪴<br/>competent<br/>50%</div>
<div style='padding:0em 0.3em'>🌲<br/>fluent<br/>0%</div>
</div>"}

addition[/addition<br/>🪴 competent 🪴\] --> arithmetic
subtraction[/subtraction<br/>🪴 competent 🪴\] --> arithmetic
multiplication[/multiplication<br/>🌿 familiar 🌿\] --> arithmetic
division[/division<br/>🌱 aware 🌱\] --> arithmetic
```

Explanation:

`0% unaware` = 0 / 4  
`25% aware` = 1 / 4  
`25% familiar` = 1 / 4  
`50% competent` = 2 / 4  
`0% fluent` = 0 / 4

## Downward Score Propagation

Assigning a score to a group topic affects all of its **subtopics** equally. However, **pretopics** are not affected.

```mermaid
flowchart TB
arithmetic[/arithmetic<br/>🌿 familiar 🌿\]

arithmetic -->  addition[/addition<br/>🌿 familiar 🌿\]
arithmetic -->  subtraction[/subtraction<br/>🌿 familiar 🌿\]
arithmetic -->  multiplication[/multiplication<br/>🌿 familiar 🌿\]
arithmetic -->  division[/division<br/>🌿 familiar 🌿\]

numbers[/numbers<br/>🌲 fluent 🌲\]

division ~~~ numbers
numbers -.-x arithmetic

```

> [!NOTE]
> Philosophically, it makes sense for proficiency to propagate to pre-topics.
> This is a limitation that is being investigated.

# Detailed Example

Below is an example of user's scores displayed directly on the `Math` topic list. Below it are some alternative ways of displaying a user's scores.

> [!NOTE]
> The below is for illustration only. It is **_NOT_** intended to be an accurate representation of a **Math** topic list.

```mermaid
flowchart BT

numbers[/"numbers<br/>🌲 fluent 🌲"\]

%% Abstraction 1
  addition[/addition<br/>🌲 fluent 🌲\]
  subtraction[/subtraction<br/>🌲 fluent 🌲\]
  multiplication[/multiplication<br/>🪴 competent 🪴\]
  division[/division<br/>🪴 competent 🪴\]

  arithmetic[/arithmetic\]
  addition --> arithmetic
  subtraction --> arithmetic
  multiplication --> arithmetic
  division --> arithmetic

  numbers -.-x addition
  numbers -.-x subtraction
  numbers -.-x multiplication
  numbers -.-x division

%% Abstraction 2
  algebra[/algebra\]
  constants[/constants<br/>🌿 familiar 🌿\] --> algebra
  variables[/variables<br/>🌱 aware 🌱\] --> algebra
  expressions[/expressions<br/>▪️ unaware ▪️\] --> algebra
  single-variable-eqs[/single variable equations<br/>▪️ unaware ▪️\] --> algebra

  arithmetic -.-x single-variable-eqs
  arithmetic -.-x expressions

%% Abstraction 3
  math[/"math"\]
  algebra --> math
```

### Visualizations

#### Pie Chart

Showing a user's combined score for the `Math` topic list.

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'pie1': '#EEE',
      'pie2': '#008000',
      'pie3': '#90EE90',
      'pie4': 'yellow',
      'pie5': 'orange'
    }
  }
}%%
pie title Math
  "▪️ unaware (2)" : 2
  "🌱 aware (1)" : 0.998
  "🌿 familiar (1)" : 0.999
  "🪴 competent (2)" : 2
  "🌲 fluent (2)" : 2
```

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'pie1': '#008000',
      'pie2': '#90EE90'
    }
  }
}%%
pie title Arithmetic
  "▪️ unaware (0)" : 0
  "🌱 aware (0)" : 0
  "🌿 familiar (0)" : 0
  "🪴 competent (2)" : 2
  "🌲 fluent (2)" : 2
```

#### Heat Map

Showing a user's `Math` proficiency as a 'coverage' heat map.

**Note:** font size does note have meaning.

```mermaid
%%{
  init: {
    'theme': 'base',
    'treemap': {
      'showValues': false,
      'padding': '8'
    },
    'themeVariables': {
      'borderWidth': '5',
      'primaryColor': 'black',
      'fontSize': '16pt'
    }
  }
}%%
treemap
"math":::grouping
  "algebra":::grouping
    "single variable equations": 1:::unaware
    "expressions": 1:::unaware
    "contants": 1:::familiar
    "variables": 1:::aware

  "arithmetic":::grouping
    "addition": 1:::fluent
    "subtraction": 1:::fluent
    "multiplication": 1:::competent
    "division": 1:::competent

classDef grouping fill: transparent

classDef unaware fill: transparent
classDef aware fill: orange
classDef familiar fill: yellow
classDef competent fill: #90EE90
classDef fluent fill: #005d00
```
