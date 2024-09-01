import { defineCollection, z, reference } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        writer: reference("writers").optional(),
      }),
    }),
  }),
  writers: defineCollection({
    type: "data",
    schema: z.object({
      github: z.string().url().startsWith("https://github.com/"),
      image: z
        .string()
        .url()
        .startsWith("https://avatars.githubusercontent.com/u/"),
    }),
  }),
};
