import Anthropic from '@anthropic-ai/sdk';

// Illustrative only: this repository is never executed and contains no API key.
const client = new Anthropic();

export async function triageTicket(ticket: string) {
  const response = await client.messages.create({
    model: 'claude-sonnet-5',
    max_tokens: 256,
    messages: [
      {
        role: 'user',
        content: `Classify this support ticket as billing, bug or question:\n\n${ticket}`,
      },
    ],
  });
  return response.content;
}
