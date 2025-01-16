import 'dotenv/config'
import { runLLM } from './src/llm'
import { addMessage, getMessages } from './src/memory'
const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

await addMessage([{ role: 'user', content: userMessage }])
const messages = await getMessages()
const response = await runLLM({
  messages: [...messages, { role: 'user', content: userMessage }],
})

await addMessage([{ role: 'assistant', content: response }])

console.log(response)
