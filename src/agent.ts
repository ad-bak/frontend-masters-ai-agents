import { getMessages, addMessages } from './memory'
import { runLLM } from './llm'
import { logMessage, showLoader } from './ui'

export const runAgent = async ({
  userMessage,
  tools,
}: {
  userMessage: string
  tools: any[]
}) => {
  await addMessages([{ role: 'user', content: userMessage }])

  const loader = showLoader('Thinking... 🤔')
  const history = await getMessages()
  const response = await runLLM({ messages: history, tools })
  if (response) {
    console.log(response.tool_calls)
  }

  await addMessages([response])

  // logMessage(response)
  loader.stop()
  return getMessages()
}
