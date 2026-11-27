import OpenAI from 'openai';

// Illustrative only: this repository is never executed and contains no API key.
const openai = new OpenAI();

export async function rankResults(query: string, results: string[]) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: `Order these results by relevance to "${query}":\n${results.join('\n')}`,
      },
    ],
  });
  return completion.choices[0]?.message.content ?? '';
}
