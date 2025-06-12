import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			cover: image().optional(),
		}),
});

const experience = defineCollection({
	loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/experience' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			variant: z.string(),
			description: z.string(),
			gif: image().optional(),
		}),
});

export const collections = { blog, experience };
