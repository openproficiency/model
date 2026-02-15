# Transcript Entry

A **transcript entry** is a permanent record of a user's [proficiency score](proficiency-score.md) for a single [topic](-topic.md).

## Required content

The following content must be included in each transcript entry.

- User ID
- Topic
- TopicList + Version
- Proficiency Score
- Timestamp
- Issuer (domain name)
- Certificate

## Signed

All transcript entries are individually signed by the issuer to enable verification of proficiency scores.

- Prevents tampering of records.
- Prevents record loss if an **issuer** is no longer available.
- Prevents record loss if an **experience source** is no longer available.

## Distributable

All transcript entries are stored individually to enable selective sharing with desired parties.

- Enables proficiency progress across multiple sources.
- Enables storage of scores across multiple services.
- Enables fine-grained privacy for sharing scores.
- Prevents repeated learning of proficient topics.

# Example

```json
[
  {
    "userID": "fist.last@example.com",
    "topic": "addition",
    "topicList": "https://example.com/math@0.1.0",
    "score": 0.8,
    "timestamp": "2026-01-01T01:01:01Z",
    "issuer": "example.com",
    "certificate": "-----BEGIN CERTIFICATE-----ABC123DEF456-----END CERTIFICATE-----"
  },
  {
    "userID": "chriswblake@gmail.com",
    "topic": "subtraction",
    "topicList": "https://example.com/math@0.1.0",
    "topicListVersion": "0.1.0",
    "score": 0.8,
    "timestamp": "2026-01-01T01:01:01Z",
    "issuer": "example.com",
    "certificate": "-----BEGIN CERTIFICATE-----ABC123DEF456-----END CERTIFICATE-----"
  }
]
```

> [!NOTE]
> The above is just an example of fields. No specific format is defined.
