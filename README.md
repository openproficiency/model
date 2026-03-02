# Open Proficiency Model

The Open Proficiency Model (OPM) is an open definition for quantifying an individual's familiarity with skills, capabilities, and other abilities.

Definitions to define the knowledge space:

- [Topic](specs/topic.md) - a defined unique area of knowledge for gaining experience and becoming proficient.
- [Topic List](specs/topic-list.md) - A list of topics provided by an issuer.
- [Issuer](specs/issuer.md) - A verified entity that can provide a topic list and/or create transcript entries.

Definitions to define and store proficiency:

- [Experience Source](specs/experience-source.md) - activities a user can complete to increase proficiency in topics. (regular work, projects, tutorials, etc.)
- [Topic Score](specs/topic-score.md) - a label indicating the degree of understanding for a specific topic.
- [Transcript Entry](specs/transcript-entry.md) - a topic score assigned to a specific user, claimed by an issuer.
- [Transcript](specs/transcript.md) - a collection of transcript entries for easier portability.

Definitions to interpret proficiency:

- [Topic Score Interpretation](specs/score-interpretation.md) - a standardized interpretation for a set of topic scores.
- [Topic Score Interpretation List](specs/score-interpretation-list.md) - a collection of topic score interpretations. Examples:
  - [Badging](specs/score-interpretation-list.md#badges---goldsilverbronze)
  - [Skill Proficiency Levels](specs/score-interpretation-list.md#simple-progression---arithmetic)
  - [Job Role Levels](specs/score-interpretation-list.md#job-roles---math-teacher)

## Advantages

- **Verified** - All proficiency is signed by the issuer.
- **Distributed** - All transcript records are independent of the issuer and learning source.
- **Never Repeat** - Knowledge topics and proficiency are transferrable. New courses on the same topics don't invalidate old courses.


## Diagram

```mermaid
flowchart BT

  subgraph knowledge-domain["Knowledge Domain"]
    %% Components
    topic[/topic\]
    pretopic[/pretopic*\]
    subtopic[/subtopic*\]
    topic-list@{ shape: docs, label: "topic-list" }
    dependency-list@{ shape: docs, label: "topic-list<br/>dependency" }

    %% Mapping
    topic --"N Topics"--> topic-list
    subtopic --> topic
    pretopic -.-x topic
    dependency-list -.-x topic-list
  end

  subgraph tracking-and-verification["Tracking and Verification"]
    %% Components
    topic-score[/"topic-score"\]
    transcript-entry@{ shape: subproc, label: "transcript-entry" }
    transcript@{ shape: div-rect, label: "transcript" }
    issuer@{ shape: flag, label: "issuer" }

    %% Mapping
    issuer --"adds signature"-->  transcript-entry
    topic-score --->  transcript-entry
    transcript-entry --"N entries"--> transcript

    %% Mapping - External
    topic-list --"1 topic"--> topic-score
  end

  subgraph official-interpretation["Official Interpretation"]
    direction BT
    %% Components
    proficiency-level@{ shape: curv-trap, label: "proficiency-level" }
    proficiency-level-list{{"proficiency-level-list<br/>"}}

    %% Mapping
    proficiency-level --"N levels"--> proficiency-level-list

    %% Mapping - External
    topic-list -."N Topics from N Lists".-x proficiency-level
    issuer --"adds signature"--> proficiency-level-list
  end

  %% ----- YOUR RESOURCES ----- %%

  subgraph experience-sources["Experience Source"]
    %% Components
    tutorial
    product-usage
    test
    etc.
  end

  %% Mapping
  topic-list -."N Topics from N Lists".-x experience-sources
  experience-sources --"1 score<br/>1 user"--> topic-score

  subgraph your-application["Your Services"]
    %% Components
    web-app@{ shape: stadium, label: "Web App" }
    mobile-app@{ shape: stadium, label: "Mobile App" }
    desktop-app@{ shape: stadium, label: "Desktop App" }
    database@{ shape: lin-cyl, label: "Database" }
  end

  %% Mapping
  proficiency-level-list --> your-application
  transcript --> your-application

```

\* The `pre-` and `sub-` prefixes only indicate relationships between topics. They are not a different component.
