import type OpenAI from 'openai'
import {
  generateImage,
  reddit,
  dadJoke,
  generateImageToolDefinition,
  redditToolDefinition,
  dadJokeToolDefinition,
} from './tools'

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
  }

  switch (toolCall.function.name) {
    case generateImageToolDefinition.name:
      return generateImage(input)
    case redditToolDefinition.name:
      return reddit(input)
    case dadJokeToolDefinition.name:
      return dadJoke(input)
    default:
      throw new Error(`Unknown tool: ${toolCall.function.name}`)
  }
}
