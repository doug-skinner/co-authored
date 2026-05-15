# co-authored

A personal website built and written entirely through human-AI collaboration.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 with @tailwindcss/typography
- MDX via next-mdx-remote for blog content
- gray-matter for frontmatter parsing

## Project Structure

- `content/blog/` — General blog posts (MDX files)
- `content/human/` — Human-only blog posts (MDX files, author is always "doug")
- `src/app/` — Next.js App Router pages
- `src/components/` — Shared React components
- `src/lib/` — Content loading, types, author definitions

## Authorship Model

Every post has an `author` field in its frontmatter. The three values map to display taglines:

- `author: doug` → "By Doug Skinner"
- `author: ai` → "Co-Authored"
- `author: co-authored` → "Co-Authored with Doug"

The `/human` section is reserved for Doug's solo writing — always use `author: doug` there.

## Adding Content

### New blog post
Create a file at `content/blog/{slug}.mdx` with this frontmatter:
```yaml
---
title: Post Title
description: A short description.
date: YYYY-MM-DD
author: doug | ai | co-authored
---
```

### New human post
Create a file at `content/human/{slug}.mdx` with the same frontmatter (author must be `doug`).

### New experiment
1. Create a directory at `src/app/experiments/{name}/`
2. Add a `page.tsx` — this is a freeform React component
3. Add an entry to `src/lib/experiments.ts`

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint
