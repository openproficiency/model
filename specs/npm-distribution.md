# npm Distribution

**npm distribution** is an _optional_ convenience channel for an [issuer](issuer.md) to publish a
collection of its [topic lists](topic-list.md) and/or [score interpretation lists](score-interpretation-list.md)
together as a single [npm](https://www.npmjs.com/) package.

- It is only a distribution method for convenience. Do not treat it as trusted.
- Every bundled list and interpretation remains valid on its own via its signature.
- Nothing about the model depends on npm.

## Purpose

- Bundle an [issuer's](issuer.md) topic lists and interpretations for easy installation.
- Let a consumer (for example a TypeScript library) install a versioned snapshot with a single dependency.
- Provide a redundant, cacheable copy of already-available materials.

## Contents

The package to two optional top-level folders.

- `topics/` - the bundled [topic lists](topic-list.md).
- `interpretations/` - the bundled [score interpretation lists](score-interpretation-list.md).
- Supported file extensions: `.yml`, `.yaml`, or `.json`
- The topic list name and version are read from **inside** the file. Matching the file name to the topic list name is for convenience.
- Only one version of a topic list may be in the package.
- Only one version of an interpretation list may be in the package.

## Dependencies

A package is **not** required and **likely will not** be self-contained.

- Any declaring of `npm` dependencies is only for convenenience, if other required topic lists happend to be available via `npm`.
- Every bundled list and interpretation already carries its own [dependency declarations](topic-list.md#dependencies)
- The consumer resolves dependencies using those declarations, exactly as it would for a standalone list.
- There is no bundling requirement and no publish-time intra-package integrity check.

## Versioning

A package carries its **own** [semantic version](https://semver.org) and is **decoupled** from the
versions of the lists and interpretations it bundles.

The package version is driven by what changes between releases:

| Change to the package contents                                    | Package bump |
| ----------------------------------------------------------------- | ------------ |
| A bundled list or interpretation is **removed**                   | major        |
| An existing bundled list or interpretation has a **major** change | major        |
| A new list or interpretation is **added**                         | minor        |
| An existing bundled list or interpretation has a **minor** change | minor        |
| Non-semantic edit only (re-sign, `locations` fix, typo)           | patch        |

## Consuming a package

1. Install the package from npm.
2. Read a topic list by name from `topics/<topic-list-name>.<ext>`
3. Read an interpretation list by name from `interpretations/<interpretation-list-name>.<ext>`
4. **Verify the GPG signature** of each file against the issuer's published key.
   - Trust the signed `owner` / `signed-by`, not the npm package name.

5. Resolve any dependencies from each list's own declarations (inside the package, from `locations`,
   or via a shared registry).

# Examples

### A single mixed package

An owner `example.com` publishes one package that bundles its math topic list and a set of public
interpretations of it.

```
@example/math/
  package.json          # name + version (own semver), untrusted
  topics/
    math.yml            # as-authored, signed by proficiency@example.com
  interpretations/
    math-levels.yml     # public interpretation, signed
    math-badges.yml     # public interpretation, signed
```

### An interpretation-only package

An owner `example.com` publishes only its interpretations of the `math` topic list. The `math` list
they interpret is declared as a dependency (by version) and resolved by the consumer through the
list's `locations` or a shared registry only when needed.

```
@example/math-interpretations/
  package.json
  interpretations/
    math-levels.yml         # declares math@0.1.0 as a dependency, signed
    math-badges.yml         # declares math@0.1.0 as a dependency, signed
    math-badges-magic.yml   # declares math@0.1.0 as a dependency, signed
```

### A topics-only package

An owner `example.com` publishes only topic lists. A `math` package ships the `math` topic list that
its interpretations build on.

```
@example/math-topics/
  package.json
  topics/
    math.yml            # the math topic list, signed by proficiency@example.com
```
