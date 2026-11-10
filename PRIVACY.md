# Privacy

The website bundles its images and fonts locally. The reviewed application code does not implement analytics, advertising, account creation, cookies, form submissions or API calls. Timeline selection is represented by the URL fragment.

The copy-link button writes the current story URL to the clipboard only after it is clicked. External evidence and image-credit links navigate to third-party websites, whose policies apply there. Hosting infrastructure may keep access logs independently of this application.

The repository excludes local configuration, dependencies, builds and internal QA artifacts. A custom scanner checks tracked text for personal paths, email addresses and credential patterns; optional locally supplied private identifiers are checked across text and binary files. Gitleaks provides a separate secret scan.

Image provenance certificates may contain public vendor contact information, and third-party images may identify their original photographers or publishers. These are distinct from the project maintainer's personal information. Historical names and public source credits are intentionally preserved.

No automated scan can guarantee the absence of every possible sensitive value. Review new files, image metadata and Git commit metadata before publication.
