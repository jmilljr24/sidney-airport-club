# Sidney Airport Club Website

A Jekyll static site deployed to Cloudflare Pages.

## Adding Meeting Minutes

See [Adding Meeting Minutes](docs/add-meeting-minutes.md) for a guide on how to add minutes via GitHub.

## Prerequisites

- Ruby 3.4.4
- Node.js
- npm
- tailwind-input.css (created automatically via `npm install`)

## Development

After cloning the repo, run:

```bash
npm install
bundle install
```

Run the following commands in **two separate terminals**:

**Terminal 1** - Watch for Tailwind CSS changes:
```bash
npm run build:css -- --watch
```

**Terminal 2** - Serve the site with live reload:
```bash
bundle exec jekyll serve --livereload
```

Now when you save changes to Tailwind classes, they'll recompile automatically and the browser will refresh.

## Building for production

```bash
npm run build
```

The pre-commit hook automatically builds CSS before each commit.

## Deployment

Cloudflare Pages automatically builds the site using `jekyll build`. The processed CSS is committed to the repo, so no additional build steps are needed.
