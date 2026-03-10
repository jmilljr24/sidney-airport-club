# Sidney Airport Club Website

A Jekyll static site deployed to Cloudflare Pages.

## Adding Meeting Minutes

See [Adding Meeting Minutes](docs/add-meeting-minutes.md) for a guide on how to add minutes via GitHub.

## Prerequisites

- Ruby 3.4.4
- Node.js
- npm

## Development

```bash
# Install dependencies
npm install
bundle install

# Build the site
npm run build

# Run local server with auto-reload
bundle exec jekyll serve --livereload
```

The pre-commit hook automatically builds CSS before each commit.

## Deployment

Cloudflare Pages automatically builds the site using `jekyll build`. The processed CSS is committed to the repo, so no additional build steps are needed.
