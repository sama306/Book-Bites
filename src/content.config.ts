import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod"

const books = defineCollection({
    loader: glob({ base: 'src/content/books', pattern: '*.md' }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        rating: z.number(),
        summary: z.string(),
        genres: z.string().array()
    })
})

export const collections = { books }