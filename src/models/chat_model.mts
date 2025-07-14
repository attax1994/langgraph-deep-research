import { ChatOpenAI } from "@langchain/openai";
import { OPENAI_API_KEY, MODEL_BASE_URL } from "../utils/index.mts";

export const chatModel = new ChatOpenAI({
    temperature: 0,
    model: "doubao-seed-1-6-thinking-250615",
    apiKey: OPENAI_API_KEY,
    configuration: {
        baseURL: MODEL_BASE_URL,
    }
});
