# Issuer

An **Issuer** is a verified entity with 2 abilities:

- An issuer may develop and modify a [topic list](topic-list.md).
- An issuer may create [transcript entries](transcript-entry.md) for users.

Note: Issuers are typically credible in a particular knowledge domain.

## Verification

Anyone may be a **verified** issuer, but this does not mean other parties must accept their claims.
For an Issuer to be effective, it must also be perceived as credible by the community.

To become an Issuer, the entity must:

- Have ownership of a [domain name](https://en.wikipedia.org/wiki/Domain_name).
- Provide distributable certificates for identifying their claims.

> [!CAUTION]
> An individual may theoretically be their own issuer, for example during self-employment.
> However, this comes with severely reduced credibility.

## Signatory Role

Because an Issuer has ownership of a domain name, they have the ability digitally sign documents. As such, they hold the responsibility to:

- Sign [Topic Lists](topic-list.md) when claiming the description of knowledge domains.
- Sign [Transcript Entries](transcript-entry.md) when claiming proficiency scores for users.

### Certificate requirements

Signed materials must embed the following 2 objects, providing the source of the issuer and the content being verified.

- An embedded `x.509` certificate provides the public key (issuer identity).
- An embedded `Ed25519` signature built from all protect fields.

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
