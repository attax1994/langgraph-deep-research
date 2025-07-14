import FireCrwalApp from '@mendable/firecrawl-js'
import { FIRECRAWL_API_KEY } from '../utils/env.mts'
import { tool } from "@langchain/core/tools"
import { z } from "zod"

const firecrawl = new FireCrwalApp({
    apiKey: FIRECRAWL_API_KEY,
})

export const webCrawlTool = tool(async ({url}) => {
    const response = await firecrawl.scrapeUrl(
        url,
        {
            formats: ["markdown"],
            onlyMainContent: true,
        }
    )

    if (!response.success) {
        throw new Error(`Failed to crawl: ${response.error}`)
    }

    return response.markdown
}, {
    name: "webCrawlTool",
    description: "Call to crawl the web content.",
    schema: z.object({
        url: z.string().describe("The url to crawl."),
    }),
})