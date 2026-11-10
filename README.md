# Bitcoin — The Human Story

An independent, English-language interactive timeline about Bitcoin's history and its effects on society. It contains 125 records, distinguishes historical events from conditional future milestones and undated proposals, and links to supporting sources.

## Run locally

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm start
```

`npm start` builds the site automatically before starting the server, including on a fresh clone.

Open http://127.0.0.1:4173. To use another port: `PORT=4174 npm start`.
The server listens on loopback only. This repository is a static website; it needs no account, API key, private key, database or environment file.

## Development and checks

```sh
npm run check
```

This builds the site and checks chronology, synchronized content, local image references, navigation data, rendered artwork, static-server boundaries and the repository privacy policy. The privacy check operates on Git-tracked files; stage newly added files before running the final publication checks.

Install Gitleaks and enable the local commit hook:

```sh
git config core.hooksPath .githooks
```

The hook checks staged content and runs a redacted secret scan. See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

## Project structure

- `app/`: React components, styles, timeline data and image registries.
- `public/assets/`: local images and fonts.
- `research/ENGLISH-CONTENT.md`: generated English content export.
- `scripts/`: synchronization and privacy checks.
- `tests/`: content, rendering, chronology and server checks.
- `dist/`: generated site, excluded from Git.

`app/timeline-data.json` is the authoritative story source. Run `npm run sync` after changing it. The effective image selection uses `complete-images.json`, then `documentary-images.json`, then `pilot-images.json`.

## Editorial and asset notes

Historical reporting is reviewed through the cutoff recorded in the timeline data. Estimated dates and proposals are explicitly labelled. Source links are evidence, not investment advice or endorsements. Later photographs and visual metaphors do not document the original date of an event.

[ASSETS.md](ASSETS.md) records the images currently displayed and their sources. Third-party images retain their respective rights; a source link is not a redistribution license. No blanket license for third-party images or project code is granted by this repository. Dependency notices are in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

See [PUBLICATION-AUDIT.md](PUBLICATION-AUDIT.md) for the review scope and limitations, and [PRIVACY.md](PRIVACY.md) for website behavior.
