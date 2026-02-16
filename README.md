# Sidney Airport Club Website

A Jekyll static site deployed to Cloudflare Pages.

## Prerequisites

- Ruby 4.0.1
- Node.js
- npm

## Development

```bash
# Install dependencies
npm install
bundle install

# Build the site
npm run build
```

The pre-commit hook automatically builds CSS before each commit.

## Deployment

Cloudflare Pages automatically builds the site using `jekyll build`. The processed CSS is committed to the repo, so no additional build steps are needed.
