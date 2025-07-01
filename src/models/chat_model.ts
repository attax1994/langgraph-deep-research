import { ChatOpenAI } from "@langchain/openai";
import { ARK_API_KEY } from "../utils";

export const chatModel = new ChatOpenAI({ 
    temperature: 0,
    model: "doubao-1-5-pro-32k-250115",
    apiKey: ARK_API_KEY,
 });
