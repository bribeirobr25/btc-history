# Contributing

Use Node.js 22 or newer. Install with `npm ci`, then run `npm run check`.

## Before committing

1. Enable `.githooks` with `git config core.hooksPath .githooks` and install Gitleaks.
2. Review `git status --short` and `git diff --cached --stat`.
3. Run `node scripts/privacy-check.mjs --staged` and `gitleaks git --staged --redact`.
4. Use a verified GitHub no-reply commit email if you do not want a personal address in public Git history. Review commit author and committer metadata before pushing. Do not assume the GitHub account privacy setting changes local Git configuration.

Never commit environment files, credentials, private keys, personal filesystem paths, private audit logs, screenshots of personal browser tabs, local archives or dependency directories. Do not put sensitive values into issues, pull requests or build logs.

`PRIVACY_DENY_TERMS` can provide additional comma-separated private identifiers to the privacy checker. Keep that value in the local environment; do not save it in tracked files. The checker reports categories and filenames, not matching values.

## Content and images

Keep the timeline data and English export synchronized. Preserve source attribution and distinctions between historical evidence, later illustrations and future proposals. Inspect new images in the carousel and reading dialog on desktop and mobile. Check image metadata for personal information before adding it.

The automated checks do not replace editorial review, visual testing or verification of image redistribution rights.
