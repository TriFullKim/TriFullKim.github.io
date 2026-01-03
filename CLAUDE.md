# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Run type check (`astro check`) then build to `./dist/` |
| `npm run preview` | Preview production build locally |

## Architecture

This is an Astro 5 static site with React components, Tailwind CSS, and DaisyUI.

**Stack:**
- Astro 5 with React integration for interactive components
- Tailwind CSS + DaisyUI + shadcn/ui components
- TypeScript
- Pretendard font (Korean) + Source Code Pro (code blocks)
- Shiki syntax highlighting with Dracula theme

**Key Directories:**
- `src/content/blog/` - Markdown blog posts using Astro Content Collections
- `src/components/ui/` - shadcn/ui React components
- `src/data/papers.json` - Publication metadata
- `src/lib/utils.ts` - `cn()` helper for className merging

**Routing:**
- `/post/[slug].astro` - Dynamic blog post pages
- `/tags/[tag].astro` - Tag-filtered post listings

**Content Collections:**
Blog posts support bilingual frontmatter (English/Korean field names):
- `date` or `생성일` for dates
- `tags` or `태그` for tags

**Styling:**
- Dark mode always on (`<html class="dark">`)
- CSS variables with HSL colors defined in `src/styles/globals.css`
- Path aliases: `~/` and `@/` map to `src/`

**Deployment:**
- GitHub Pages via `.github/workflows/astro.yml`
- Site URL: https://www.trifull.kim
