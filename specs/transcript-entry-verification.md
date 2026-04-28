# Transcript Entry Verification

This spec defines an optional API contract for issuers to provide an additional online verification of [transcript entries](transcript-entry.md).

## Purpose

Transcript entries are immutable once signed.
Verification allows a receiver to confirm with the issuer if a transcript entry is still valid.
For example: an issuer may have revoked an entry for bad behavior

## Endpoint

The `verification-url` in a transcript entry identifies the issuer's endpoint for batch verification lookups.

### API Request

Type: `POST`

Content-Type: `application/json`

Body: an array of one or more certificate hashes

<!-- prettier-ignore -->
```json
[
  "abc123...",
  "def456...",
  "ghi789..."
]
```

## API Response

A JSON object mapping each submitted certificate hash to its verification status.

- One key per certificate hash submitted in the request.
- Unknown hashes return `valid: false`.

```json
{
  "abc123...": { "valid": true },
  "def456...": {
    "valid": false,
    "reason": "incorrect",
    "invalidated-at": "2026-04-01T00:00:00Z"
  },
  "ghi789...": { "valid": true }
}
```

Responses for this contract are defined by [transcript-entry-verification.schema.json](../schemas/transcript-entry-verification.schema.json).

## Invalid Reasons

The `reason` field is optional, but encouraged.

Allowed values:

- `dishonesty` - user was caught cheating or misrepresenting work
- `policy-violation` - user violated issuer terms of service
- `incorrect` - score was incorrectly issued
- `other` - reason does not fit any other category

## Security and Privacy Requirements

- Endpoint is served over HTTPS.
- Endpoint does not require authentication.
- API only accepts certificate hash identifiers for lookup.
- API does not accept or return user-identifiable information.
