import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const drinks = defineCollection({
    loader: glob({
        pattern: 'drinks/*.yml',
    }),
    schema: z.object({
        isAlcoholic: z.boolean(),
        title: z.string(),
        ingredients: z.array(z.string()),
        description: z.string({required_error: 'Description is required'}),
        intensity: z.number(),
    }),
});

export const collections = { drinks };