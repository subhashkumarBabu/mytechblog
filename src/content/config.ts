import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});
const specCollection = defineCollection({
	schema: z.object({}),
});
// Synced from the Obsidian vault by pipeline/sync_wiki_to_site.py — do not edit by hand.
const wikiCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		topic: z.string(),
		draft: z.boolean().default(false),
		generated: z.string().optional().default(""),
		sources: z.string().optional().default(""),
	}),
});
export const collections = {
	posts: postsCollection,
	spec: specCollection,
	wiki: wikiCollection,
};
