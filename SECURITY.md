# Security

No credentials are required to build or run this static site. Never add private keys, wallet recovery phrases, provider credentials or private environment configuration to the repository.

For a vulnerability report, use GitHub's private vulnerability reporting feature if enabled. Do not place credentials, personal information or exploit data containing private files in a public issue. If no private reporting channel is available, open only a minimal public request for a private channel.

The included server is for local preview, binds to loopback, restricts GET/HEAD requests to the build directory, checks real paths to prevent symlink escapes, and returns generic errors. Use a static hosting service for public deployment.

If a secret is published, revoke or rotate it immediately. Deleting the current file does not remove copies in Git history, forks, caches or logs. Coordinate any necessary history cleanup separately.
