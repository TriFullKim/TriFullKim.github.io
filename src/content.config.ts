import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().or(z.date()).optional(),
    생성일: z.string().optional(),
    tags: z.array(z.string()).optional(),
    태그: z.array(z.string()).optional(),
    image: z.string().optional(),
    summary: z.string().optional(),
  }).transform(data => ({
    ...data,
    date: (data.date ? new Date(data.date) : (data.생성일 ? new Date(data.생성일) : new Date())),
    tags: data.tags || data.태그 || [],
  })),
});

export const collections = {
  'blog': blogCollection,
};
