# Transcript Entry

A **transcript entry** is a permanent record of a user's [proficiency score](proficiency-score.md) for a single [topic](experience-topic.md).

## Required content

The following content must be included in each transcript entry.

- User ID
- Topic
- Proficiency Score
- Issuer
- Topic Schema
- Timestamp

## Signed

All transcript entries are individually signed by the issuer to enable verification of proficiency scores.

- Prevents tampering of records.
- Prevents record loss if an **issuer** is no longer available.
- Prevents record loss if an **experience source** is no longer available.

## Distributable

All transcript entries are stored individually to enable selective sharing with desired parties.

- Enables proficiency progress across multiple sources.
- Enables storage of scores across multiple services.
- Enables fine-grined privacy for sharing scores.
- Prevents repeated learning of proficient topics.

# Example

Sam finished 2 modules in a course named 'Basic Arithmetic'. 2 transcript entries were created:

```json
{
  "userID": 1234,
  "topic": 22344, // addition
  "topicSchema": 0.1,
  "score": 0.8,
  "timestamp": "...",
  "issuer": "...",
  "signature": "..."
},
{
  "userID": 1234,
  "topic": 22345, // subtraction
  "topicSchema": 0.1,
  "score": 0.8,
  "timestamp": ...,
  "issuer": "...",
  "schema_v": 0.1,
  "signature": "..."
}
```

> [!NOTE]
> The above is just an example of fields. No specific format is defined.
