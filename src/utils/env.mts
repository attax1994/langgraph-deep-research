// Define api keys in config.ts and keep it locally to prevent a leak.
import { OPENAI_API_KEY, TAVILY_API_KEY, FIRECRAWL_API_KEY, LANGSMITH_API_KEY, MODEL_BASE_URL } from './config.mts'

export {
    OPENAI_API_KEY,
    TAVILY_API_KEY,
    FIRECRAWL_API_KEY,
    LANGSMITH_API_KEY,
    MODEL_BASE_URL
}

process.env.OPENAI_API_KEY = OPENAI_API_KEY
process.env.TAVILY_API_KEY = TAVILY_API_KEY
process.env.FIRECRAWL_API_KEY = FIRECRAWL_API_KEY
process.env.LANGSMITH_API_KEY = LANGSMITH_API_KEY
