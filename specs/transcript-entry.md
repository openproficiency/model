# Transcript Entry

A **transcript entry** is a permanent record of a user's [score](topic-score.md) for a single [topic](topic.md).

## Required content

The following content must be included in each transcript entry.

- User Email
- Topic
- TopicList + Version
- Topic Score
- Issued At
- Valid Until
- Issuer (domain name)
- Certificate

## Signed

All transcript entries are individually signed by the issuer to enable verification of scores.

- Prevents tampering of records.
- Prevents record loss if an **issuer** is no longer available.
- Prevents record loss if an **experience source** is no longer available.

## Distributable

All transcript entries are stored individually to enable selective sharing with desired parties.

- Enables proficiency progress across multiple sources.
- Enables storage of scores across multiple services.
- Enables fine-grained privacy for sharing scores.
- Prevents repeated learning of proficient topics.

## Score Expiration

[Issuers](issuer.md) of transcript entries are recommended to use a [topic's suggested validity period](topic.md#validity-period) when setting `valid-until` field to provide an expiration time. Nevertheless, this is only a suggestion and the issuer makes the final decision.

**Example 1:** A product vendor (topic list owner) knows their products and industry well. They release major versions annually so the recommended expiration is 1 year. Their training partners all use the recommended validity period when issuing transcript entries.

**Example 2:** A math standards body sets the recommended validity period at 4 years. However, a private school has a very rigorous curriculum, which has requirements much higher than the industry standards. They issue their transcript entries at 8 years.

## Score Acceptance

It is the duty of the receiver of a transcript to decide which scores are acceptable and valuable.

There are many situations where this may occur, for example:

- the industry has evolved, making older knowledge less applicable
- a topic score has expired
- a receiver choses to ignore expiration time to find talent for a legacy system
- an issuer was not accredited
- a score was revoked

# Example

```json
[
  {
    "user-email": "fist.last@example.com",
    "topic": "addition",
    "topicList": "https://example.com/0.1.0/math.json",
    "score": "competent",
    "issued-at": "2026-01-01T01:01:01Z",
    "valid-until": "2028-01-01T01:01:01Z",
    "issuer": "example.com",
    "certificate": "-----BEGIN CERTIFICATE-----ABC123DEF456-----END CERTIFICATE-----"
  },
  {
    "user-email": "chriswblake@gmail.com",
    "topic": "subtraction",
    "topicList": "https://example.com/0.1.0/math.json",
    "score": "competent",
    "issued-at": "2026-01-01T01:01:01Z",
    "valid-until": "2028-01-01T01:01:01Z",
    "issuer": "example.com",
    "certificate": "-----BEGIN CERTIFICATE-----ABC123DEF456-----END CERTIFICATE-----"
  }
]
```
