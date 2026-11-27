import Anthropic from '@anthropic-ai/sdk';

// Illustrative only: this repository is never executed and contains no API key.
const client = new Anthropic();

export async function answerQuestion(question: string) {
  const response = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: question }],
  });
  return response.content;
}
