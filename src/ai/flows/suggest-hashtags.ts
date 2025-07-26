// Implemented the AI-powered hashtag suggestion tool using Genkit.

'use server';

/**
 * @fileOverview AI-powered social media hashtag suggestion agent.
 *
 * - suggestHashtags - A function that suggests trending hashtags based on keywords.
 * - SuggestHashtagsInput - The input type for the suggestHashtags function.
 * - SuggestHashtagsOutput - The return type for the suggestHashtags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestHashtagsInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords related to the candy strawberry product, separated by commas.'
    ),
});
export type SuggestHashtagsInput = z.infer<typeof SuggestHashtagsInputSchema>;

const SuggestHashtagsOutputSchema = z.object({
  hashtags: z
    .string()
    .describe('A list of relevant and trending hashtags, separated by commas.'),
});
export type SuggestHashtagsOutput = z.infer<typeof SuggestHashtagsOutputSchema>;

export async function suggestHashtags(input: SuggestHashtagsInput): Promise<SuggestHashtagsOutput> {
  return suggestHashtagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestHashtagsPrompt',
  input: {schema: SuggestHashtagsInputSchema},
  output: {schema: SuggestHashtagsOutputSchema},
  prompt: `You are a social media marketing expert specializing in identifying trending hashtags for food-related products.

  Given the following keywords related to a candy strawberry product, suggest a list of relevant and trending hashtags to maximize visibility on social media platforms.

  Keywords: {{{keywords}}}

  Provide the hashtags separated by commas.
  `,
});

const suggestHashtagsFlow = ai.defineFlow(
  {
    name: 'suggestHashtagsFlow',
    inputSchema: SuggestHashtagsInputSchema,
    outputSchema: SuggestHashtagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
