# co-authored — Agent Instructions

You are working on **co-authored**, a personal website built through human-AI collaboration. Every change you make will be reviewed by Doug via pull request.

## Project

- Next.js 16, App Router, TypeScript, Tailwind CSS v4
- MDX content with frontmatter, rendered via next-mdx-remote
- Static site — all pages generated at build time

## Site Sections

- `/blog` — General blog. Posts by Doug, AI, or both.
- `/human` — Doug's solo writing. **Never write content here.** Only scaffold empty files if asked.
- `/experiments` — Interactive TSX pages. Freeform creative work.

## Authorship Model

Every post has an `author` field in frontmatter. Use the correct value:

- `doug` — Written solely by Doug. Only used in `/human` section.
- `ai` — Written solely by AI. Use this when you write a post without specific human direction beyond a topic.
- `co-authored` — Written collaboratively. Use this when Doug provided substantial direction, outline, or key ideas in the issue.

## Adding a Blog Post

Create a file at `content/blog/{slug}.mdx`:

```yaml
---
title: Post Title
description: One sentence summary.
date: YYYY-MM-DD
author: ai | co-authored
tags:
  - topic
---
```

Write in a clear, direct voice. No em dashes. No "delve", "landscape", "paradigm", or other LLM tells. Short paragraphs. Concrete over abstract.

## Adding an Experiment

1. Create `src/app/experiments/{name}/page.tsx` — a full React component
2. Add an entry to `src/lib/experiments.ts`
3. Experiments can use `"use client"` and any React patterns

## Adding a Feature or Fixing a Bug

- Read the existing code before changing it
- Follow existing patterns — don't introduce new abstractions
- Run `npm run build` to verify your changes compile
- Keep changes focused on what the issue asks for

## Writing Style

When writing content for this site:
- Be direct and conversational
- No filler phrases or throat-clearing
- Specific examples over general claims
- It's okay to have opinions — this isn't a corporate blog
- Keep posts between 300-800 words unless the topic demands more

## PR Guidelines

- Reference the issue number in your PR description
- Keep PRs focused — one issue, one PR
- Include a brief description of what you did and why
