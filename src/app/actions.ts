
'use server';

import { suggestHashtags } from '@/ai/flows/suggest-hashtags';

export async function getHashtagSuggestions(keywords: string): Promise<{hashtags?: string[], error?: string}> {
  if (!keywords || keywords.length < 3) {
    return { error: 'Please enter at least 3 characters.' };
  }

  try {
    const result = await suggestHashtags({ keywords });
    if (!result.hashtags) {
        return { error: 'The AI could not generate hashtags based on the keywords. Please try different keywords.' };
    }
    const hashtagsArray = result.hashtags.split(',').map(h => h.trim().replace(/^#/, '')).filter(Boolean);
    return { hashtags: hashtagsArray };
  } catch (e) {
    console.error('Hashtag suggestion error:', e);
    return { error: 'An unexpected error occurred while generating hashtags. Please try again later.' };
  }
}
