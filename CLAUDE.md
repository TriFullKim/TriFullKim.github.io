# CLAUDE.md - AI Assistant Guide for TriFullKim.github.io

This document provides comprehensive guidance for AI assistants working on this codebase. It describes the project structure, development workflows, coding conventions, and key patterns to follow.

## Project Overview

**Type**: Personal blog and portfolio website
**Owner**: Taehoon Kim (@TriFullKim)
**Domain**: https://www.trifull.kim
**Framework**: Astro 5.14.1 with React
**Language**: Korean and English (mixed content)
**Purpose**: Academic portfolio showcasing research publications and blog posts

## Technology Stack

### Core Framework
- **Astro**: 5.14.1 - Static Site Generator with hybrid rendering
- **React**: 19.1.1 - Component library for interactive elements
- **TypeScript**: 5.4.5 - Type-safe JavaScript

### Styling
- **Tailwind CSS**: 6.0.2 - Utility-first CSS framework
- **DaisyUI**: 5.1.29 - Tailwind CSS component library
- **@tailwindcss/typography**: 0.5.19 - Typography plugin for prose content

### Additional Libraries
- **moment**: 2.30.1 - Date formatting and manipulation
- **pretendard**: 1.3.9 - Korean font family
- **@fontsource/source-code-pro**: 5.0.18 - Monospace font

### Integrations
- **@astrojs/react**: React integration
- **@astrojs/sitemap**: Automatic sitemap generation
- **@astrojs/tailwind**: Tailwind CSS integration

## Directory Structure

```
/
├── public/               # Static assets
│   ├── fonts/           # Font files
│   └── assets/          # Images and other static files
├── src/
│   ├── assets/          # Source assets (processed by build)
│   ├── components/      # Reusable Astro/React components
│   │   ├── Hero.astro
│   │   ├── PostCard.astro
│   │   ├── MarkdownCard.astro
│   │   ├── Paper.astro
│   │   ├── PhotoCard.astro
│   │   ├── PostElevatorPanel.astro
│   │   └── TagList.astro
│   ├── database/        # Content storage
│   │   ├── json/        # Structured data (publications, etc.)
│   │   │   └── papers.json
│   │   └── post/        # Blog posts in Markdown
│   │       └── *.md
│   ├── layouts/         # Page layout components
│   │   ├── Layout.astro      # Main layout with SEO
│   │   ├── Navigation.astro  # Header navigation
│   │   ├── Footer.astro      # Footer component
│   │   └── Section.astro     # Content sections
│   ├── pages/           # File-based routing
│   │   ├── index.astro       # Home page
│   │   ├── about.astro       # About page
│   │   ├── topic.astro       # Topics/tags page
│   │   ├── test.astro        # Testing page
│   │   ├── 404.astro         # Custom 404 page
│   │   └── post/
│   │       ├── index.astro   # Post listing
│   │       ├── [slug].astro  # Individual post page (dynamic)
│   │       ├── [topic].astro # Topic/tag filtered posts
│   │       └── [post].astro  # Alternative post route
│   ├── styles/          # Global styles
│   └── widgets/         # Complex feature components
│       ├── Publication.astro
│       └── Design.astro
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Configuration Files

### astro.config.mjs
```javascript
site: 'https://www.trifull.kim'
integrations: [react(), sitemap(), tailwind()]
```

### tsconfig.json
- Uses `"~/*"` path alias mapping to `"src/*"`
- Enable `strictNullChecks` and `allowJs`
- Excludes `dist/` directory

### tailwind.config.mjs
- Content: All files in `src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`
- Plugins: DaisyUI and @tailwindcss/typography

## Content Management

### Blog Posts

**Location**: `src/database/post/*.md`

**Frontmatter Format**:
```yaml
---
생성일: "2025-10-09T16:26:00.000Z"
Last edited time: "2025-10-09T11:58:00.000Z"
태그: ["Remind", "Tutorial"]
pid: "c37c989f-7c24-4a52-8c7b-6888b58d59fb"  # UUID
title: "Post Title"
slug: "url-friendly-slug"
last_edited_time: "2025-10-09T11:58:00.000Z"
---
```

**Important Notes**:
- Frontmatter uses Korean field names (생성일, 태그, etc.) mixed with English
- `pid` is a UUID for unique identification
- `slug` is used for URL routing
- Dates in ISO 8601 format
- Tags are arrays of strings

### Publications/Papers

**Location**: `src/database/json/papers.json`

**Structure**:
```json
{
  "uuid": {
    "me": "Taehoon Kim",
    "isInternational": true,
    "pubDate": ["2024-01-01", null],
    "author": "Author list with * for equal contribution, † for corresponding",
    "confName": "WACV",
    "tags": ["Computer Vision", "Generative AI"],
    "paperURL": "https://...",
    "codeURL": "https://github.com/...",
    "postscript": "Conference tier description",
    "pid": "uuid",
    "title": "Paper Title",
    "slug": "url-slug",
    "last_edited_time": "2024-07-12T17:04:00.000Z"
  }
}
```

## Coding Conventions

### File Naming
- Components: PascalCase (e.g., `PostCard.astro`)
- Pages: lowercase with hyphens or kebab-case (e.g., `about.astro`)
- Dynamic routes: Square brackets (e.g., `[slug].astro`)

### Component Props
```typescript
interface Props {
  slug: string;
  title: string;
  createdTime: string;
  tags: Array<string>;
}
```

### Import Paths
- Use `~/` alias for `src/` directory
- Example: `import Layout from "~/layouts/Layout.astro"`

### Styling Approach
1. **Scoped styles**: Use `<style>` blocks in Astro components for component-specific styles
2. **Tailwind utilities**: Use for layout and common patterns
3. **DaisyUI components**: Use badge, link, and other DaisyUI components
4. **Global styles**: Defined in `Layout.astro` with `<style is:global>`

### Color Scheme
- Background: `#0f172a` (slate-900)
- Text: `#cbd5e1` (slate-300)
- Muted text: `#94a3b8` (slate-400)
- Border: `#475569` (slate-600)
- Accent: `#1e40af` (blue-800)
- Hover: `#1e40af` with shadow

### Typography
- Primary font: Pretendard (Korean support)
- Monospace: Source Code Pro
- Fallback: system-ui, sans-serif

## SEO and Meta Tags

The `Layout.astro` component handles comprehensive SEO:

- **Open Graph**: Full support with type, locale, image
- **Twitter Cards**: summary_large_image
- **JSON-LD**: Structured data for articles and web pages
- **Canonical URLs**: Automatic canonical URL generation
- **Robots**: Configurable noindex option
- **Theme color**: `#0f172a`

**When creating new pages**:
```astro
<Layout
  title="Page Title @TriFullKim"
  description="Page description"
  image="/image.png"
  id="unique-id"
/>
```

## Development Workflow

### Available Scripts
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Type check + build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Build Process
1. `astro check` - Type checking
2. `astro build` - Build static site to `./dist/`

### Adding New Blog Posts

1. Create markdown file in `src/database/post/`
2. Add frontmatter with required fields:
   - 생성일, Last edited time, 태그, pid, title, slug, last_edited_time
3. Write content in markdown
4. The post will be automatically picked up by `[slug].astro` via `Astro.glob()`

### Adding New Publications

1. Edit `src/database/json/papers.json`
2. Add new entry with UUID as key
3. Include all required fields
4. The `Publication.astro` widget will display it

## Routing System

### Static Pages
- `/` - Home (index.astro, imports about.astro)
- `/about` - About page
- `/topic` - Topics listing
- `/404` - Custom 404 page

### Dynamic Routes
- `/post/[slug]` - Individual blog post
- `/post/[topic]` - Posts filtered by tag/topic

### Dynamic Route Implementation
```typescript
export async function getStaticPaths() {
  const allPosts = await Astro.glob("../../database/posts/*.md");
  return allPosts.map(post => {
    return { params: { slug: post.frontmatter?.slug }, props: { post } };
  });
}
```

## Component Patterns

### PostCard Component
Displays post preview with:
- Title (h2, 1.5rem, font-weight 700)
- Preview text (muted, 0.9rem)
- Tags (DaisyUI badges)
- Date (formatted with moment.js as YYYY/MM/DD)
- Hover effect (blue border and shadow)

### Layout Component
Main wrapper providing:
- SEO meta tags
- Navigation
- Footer
- Consistent max-width (960px)
- Centered content
- Proper padding

## AI Assistant Guidelines

### When Adding Features
1. **Follow existing patterns**: Match component structure, naming, and styling
2. **Use TypeScript**: Define Props interfaces
3. **Maintain SEO**: Update meta tags appropriately
4. **Test responsive design**: Ensure mobile compatibility
5. **Use path aliases**: Import with `~/` for src files

### When Modifying Content
1. **Preserve frontmatter format**: Keep Korean field names
2. **Generate UUIDs**: For new posts/papers, use valid UUID v4
3. **Use ISO dates**: All dates in ISO 8601 format
4. **Maintain slugs**: URL-friendly, lowercase with hyphens

### When Styling
1. **Match color scheme**: Use existing color variables
2. **Follow spacing**: Use consistent padding/margins (0.25rem, 1rem, 1.25rem)
3. **Maintain accessibility**: Proper contrast ratios
4. **Use Tailwind utilities first**: Then scoped styles if needed

### When Working with Git
1. **Branch naming**: Use descriptive names starting with `claude/`
2. **Commit messages**: Follow conventional commits (chore:, feat:, fix:)
3. **Push to designated branch**: Always push to the specified feature branch
4. **Example commits**:
   - `chore: update dependencies and add devDependencies`
   - `feat: add new blog post about CUDA installation`
   - `fix: correct frontmatter format in post`

### Common Pitfall Prevention
1. **Don't break dynamic imports**: `Astro.glob()` paths must be static strings
2. **Don't skip TypeScript checks**: Run `npm run build` to verify
3. **Don't ignore existing conventions**: Match Korean/English field naming
4. **Don't create unnecessary files**: Prefer editing existing components
5. **Don't remove slug/pid fields**: They're critical for routing

## Future Plans (from README)

The owner has noted these TODO items:
- Notion API reverse engineering for integration
- Image downloads with Cloudflare integration
- Notion page (.markdown) to Astro post conversion
- SEO and slugify improvements

When working on these features, consult with the user about implementation details.

## Testing Pages

`src/pages/test.astro` exists for experimental features. Use this for trying new components or patterns before integrating into main pages.

## Deployment

- **Platform**: GitHub Pages
- **Domain**: www.trifull.kim
- **Build**: Automatic via GitHub Actions
- **Site URL**: Configured in astro.config.mjs

## Summary for Quick Reference

**Framework**: Astro + React + TypeScript
**Styling**: Tailwind CSS + DaisyUI
**Content**: Markdown files + JSON data
**Routing**: File-based with dynamic routes
**Path Alias**: `~/*` → `src/*`
**Color Scheme**: Dark theme (slate palette)
**Fonts**: Pretendard (Korean), Source Code Pro (monospace)
**Date Format**: ISO 8601 → display as YYYY/MM/DD
**SEO**: Comprehensive (OG, Twitter, JSON-LD)

---

**Last Updated**: 2025-11-14
**Astro Version**: 5.14.1
**Node Environment**: ESM (type: module)
