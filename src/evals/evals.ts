//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const kagi_searchEval: EvalFunction = {
    name: "kagi_search Tool Evaluation",
    description: "Evaluates the kagi_search functionality",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Search for the top three coffee makers under $200 and summarize their key features.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [kagi_searchEval]
};
  
export default config;
  
export const evals = [kagi_searchEval];