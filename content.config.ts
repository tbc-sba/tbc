import {defineContentConfig, defineCollection} from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    news: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        date: z.string(),
        cover: z.string(),
        tiele: z.string(),
        description: z.string(),
      })
    })
  }
})
