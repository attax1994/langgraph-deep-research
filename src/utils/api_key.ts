// Define api keys in config.ts and keep it locally to prevent a leak.
import { OPENAI_API_KEY, TAVILY_API_KEY, ARK_API_KEY, FIRECRAWL_API_KEY } from './config.js'

export {
    OPENAI_API_KEY,
    TAVILY_API_KEY,
    ARK_API_KEY,
    FIRECRAWL_API_KEY,
}

process.env.OPENAI_API_KEY = OPENAI_API_KEY
process.env.TAVILY_API_KEY = TAVILY_API_KEY
process.env.ARK_API_KEY = ARK_API_KEY
process.env.FIRECRAWL_API_KEY = FIRECRAWL_API_KEY
