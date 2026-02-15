# Open Proficiency Model

The Open Proficiency Model (OPM) is an open definition for quantifying an individual's familiarity with skills, capabilities, and other abilities.

Definitions to define the knowledge space:

- [Topic](specs/topic.md) - a defined unique area of knowledge for gaining experience and becoming proficient.
- [Topic List](specs/topic-list.md) - A list of topics provided by an issuer.
- [Issuer](specs/issuer.md) - A verified entity that can provide a topic list and/or create transcript entries.

Definitions to define and store proficiency:

- [Experience Source](specs/experience-source.md) - activities a user can complete to increase proficiency in topics. (regular work, projects, tutorials, etc.)
- [Proficiency Score](specs/proficiency-score.md) - a number/label indicating the degree of understanding for a specific topic.
- [Transcript Entry](specs/transcript-entry.md) - a proficiency score assigned to a specific user, claimed by an issuer.
- [Transcript](specs/transcript.md) - a collection of transcript entries for easier portability.

Definitions to interpret proficiency:

- [Proficiency Level](specs/proficiency-level.md) - a standardized interpretation for a collection of proficiency scores.
- [Proficiency Level List](specs/proficiency-level-llist.md) - a collection of proficiency levels that imply order.

## Advantages

- **Verified** - All proficiency is signed by the issuer.
- **Distributed** - All transcript records are independent of the issuer and learning source.
- **Never Repeat** - Knowledge topics and proficiency are transferrable. New courses on the same topics don't invalidate old courses.
