# Publication review

Review date: 10 November 2026. Source release: v19, with 125 timeline records.

## Scope and findings

- Reviewed application components, build and preview scripts, image registries, documentation, tests, dependencies and bundled image metadata.
- No maintainer name, personal email, personal filesystem path or recognized credential was found by the initial targeted byte/text scan and Gitleaks scan.
- Removed 34 internal image-generation identifiers from the public registries.
- Excluded old release notes, internal image audits, QA screenshots, archives, generated builds and dependencies from the repository.
- Removed GPS-bearing EXIF metadata from three third-party photographs without re-encoding image pixels. Public attribution and image provenance records remain.
- Fixed the preview server's string-prefix directory check, which could allow a similarly named sibling directory. Added real-path checks for symlink escapes and regression tests.
- Made builds clear their output directory first so stale artifacts cannot survive a rebuild.
- Added a dependency lockfile, expanded ignore rules, a staged-content privacy hook and GitHub validation workflow.

## Verification

The release preparation checks include a clean dependency installation, build, existing content/rendering/navigation/chronology tests, server escape tests, tracked and staged privacy scans, and a redacted Gitleaks scan. Browser smoke checks cover the timeline, image selection and reading dialog. The timeline content is unchanged.

## Limits

This is a targeted publication/privacy and code review, not a penetration test or a legal clearance of third-party media. Automated scanners can miss novel secrets or identifiers. Text embedded visibly in third-party images and future contributions still require review. Public certificate/photographer contact details are not maintainer contact details.

No previous Git history was copied into this release. A public repository exposes its owner account and commit attribution; hiding a personal email requires verifying the actual author/committer configuration used when a commit is created. No commit author identity is configured by the project.
