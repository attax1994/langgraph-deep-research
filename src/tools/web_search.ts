import { tavily } from '@tavily/core'
import { TAVILY_API_KEY } from "../utils";
import { tool } from "@langchain/core/tools";
import { z } from "zod"

const tavilyInstance = tavily({
    apiKey: TAVILY_API_KEY,
})

export const webSearchTool = tool(
    async ({ query }) => {
        const response = await tavilyInstance.search(
            query,
            {
                maxResults: 5,
                includeDomains: [],
                excludeDomains: ['www.baidu.com'],
                includeImages: true,
            }
        )
        if (response?.results) {
            return response
        } else {
            throw new Error(`search failed`)
        }
    },
    {
        name: "webSearchTool",
        description: "Call to search the web content.",
        schema: z.object({
            query: z.string().describe("The content to search."),
        }),
    }
)