import { string } from 'zod'
import { openai } from './ai'

export const runLLM = async ({ userMessage }: { userMessage: string }) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: userMessage }],
  })

  return response.choices[0].message.content
}
