import { dadJokeToolDefinition } from './dadJoke'
import { generateImageToolDefinition } from './generateImage'
import { redditToolDefinition } from './reddit'

export * from './generateImage'
export * from './reddit'
export * from './dadJoke'

export const tools = [
  generateImageToolDefinition,
  redditToolDefinition,
  dadJokeToolDefinition,
]
