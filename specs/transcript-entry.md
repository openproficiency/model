# Transcript Entry

A **transcript entry** is a permanent record of a user's [score](topic-score.md) for a single [topic](topic.md).

## Required content

The following content must be included in each transcript entry.

- User Email
- Topic
- Topic List + Version
- Topic Score
- Issued At
- Valid Until
- Issued By (domain name)
- Signature (GPG)
- Signed By (email; domain must match Issued By)

## Extended Content

### Topic List Source

An issuer may append a list of URLs to help a receiver locate a copy of the topic list. It is recommended to position the original in the first position.

- **Type**: List of URL strings to locations where the topic list is hosted.
- **Validation**: Modifiying this field does not invalidate the signature.

### Verification URL

An issuer may append a URL that enables receivers to verify that the score is still endorsed.

- **Type**: URL string pointing to the issuer's verification API.
- **Privacy**: The API only accepts an entry's signature hash as input and return only a verification status. No user-identifiable data is transmitted.

For more details, see [Transcript Entry Verification](transcript-entry-verification.md).

## Signed

All transcript entries are individually signed by the issuer to enable verification of scores.

- Prevents tampering of records.
- Prevents record loss if an **issuer** is no longer available.
- Prevents record loss if an **experience source** is no longer available.

## Distributable

All transcript entries are stored individually using a flat structure to enable easy and selective sharing with desired parties. 

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

> Receivers are highly encouraged to check validity status if the `verification-url` is provided.

# Examples

### Required content

```yml
# yaml-language-server: $schema=https://raw.githubusercontent.com/openproficiency/model/refs/heads/main/schemas/transcript-entry.schema.json

user-email: first.last@example.com
topic: addition
topic-list: math
topic-list-version: 0.1.0
topic-list-owner: example.com
score: competent
issued-at: 2026-01-01T01:01:01Z
valid-until: 2028-01-01T01:01:01Z
issued-by: example.com
signature: -----BEGIN PGP SIGNATURE-----ABC123DEF456-----END PGP SIGNATURE-----
signed-by: proficiency@example.com
```

### Extended content

The below includes the optional `topic-list-sources` and `verification-url` fields.

```yml
# yaml-language-server: $schema=https://raw.githubusercontent.com/openproficiency/model/refs/heads/main/schemas/transcript-entry.schema.json

user-email: first.last@example.com
topic: addition
topic-list: math
topic-list-version: 0.1.0
topic-list-owner: example.com
topic-list-sources: # Optional
  - https://example.com/topic-lists/math/0.1.0
  - https://raw.githubusercontent.com/my-org/topics/refs/heads/main/math.yml
score: competent
issued-at: 2026-01-01T01:01:01Z
valid-until: 2028-01-01T01:01:01Z
verification-url: https://example.com/verify-scores # Optional
issued-by: example.com
signature: -----BEGIN PGP SIGNATURE-----ABC123DEF456-----END PGP SIGNATURE-----
signed-by: proficiency@example.com
```
