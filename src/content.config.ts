import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = { experience, projects };
