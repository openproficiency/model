# Issuer

An **Issuer** is a verified entity with 2 abilities:

- An issuer may develop and modify a [topic list](topic-list.md).
- An issuer may create [transcript entries](transcript-entry.md) for users.

Note: Issuers are typically credible in a particular knowledge domain.

## Credibility

Anyone may be an issuer, but this does not mean other parties must accept their claims.
For an Issuer to be effective, it must also be perceived as credible by the community.

To become an Issuer, the entity must:

- Have ownership of a [domain name](https://en.wikipedia.org/wiki/Domain_name).
- Publish a GPG public key - associated to the email(s) used with topic lists, interpretations, and transcript entries.s.

> [!CAUTION]
> An individual may theoretically be their own issuer, for example during self-employment.
> However, this comes with severely reduced credibility.

## Signatory Role

Because an Issuer has ownership of a domain name, they have the ability to digitally sign documents with a GPG (OpenPGP) key tied to an email with that domain. As such, they hold the responsibility to:

- Sign [Topic Lists](topic-list.md) when claiming the description of knowledge domains.
- Sign [Transcript Entries](transcript-entry.md) when claiming scores for users.

### Signature requirements

Signed materials must include two fields:

- `signature` — an ASCII-armored detached OpenPGP signature, built from the document's protected fields.
- `signed-by` — the email address of the signing GPG key, for convenience. Only trust the email in the signature.

The email address domain must exactly match:

- the `owner` for [topic lists](topic-list.md) and [score interpretation lists](score-interpretation-list.md).
- the `issued-by` for [transcript entries](transcript-entry.md).

The convention is to sign materials with an email like `proficiency@example.com` so consuming parties can easily build acceptance rulesets for trusted issuers.

## Score Verification Service

An issuer may optionally provide a dedicated service for additional verification of [transcript entries](transcript-entry.md) they have issued.

This is useful for increased confidence with receivers and provides the ability for an issuer to revoke scores they had previously issued.

The issuer simply includes the [Verification URL](transcript-entry.md#verification-url) field, which is a URL to a service they manage.

For technical details, see the [transcript entry verification](transcript-entry-verification.md) spec.

# Examples

### Product/Service Provider

A company makes 3d printing machines.

- They provide a [topic list](topic-list.md) covering many product features, common tasks, and even maintenance procedures.
- They provide "getting started" tutorials for logged-in users.
- Users can download their transcript, for example to add to their private resume.

### Educational Institution

A university has a degree program in mechanical engineering.

- They consume a [topic list](topic-list.md) from an international standards body.
- All courses are mapped to topics from the standard list.
- Upon completion of each course, a transcript entry is created.
- Users can download their transcript, for example to apply to a job application.
