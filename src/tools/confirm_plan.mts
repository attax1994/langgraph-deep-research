import { interrupt } from "@langchain/langgraph";
import { tool } from "@langchain/core/tools";
import { z } from "zod";

const confirmPlanSchema = z.object({
    plan: z.string().describe("The plan to be confirmed or modified."),
});

export const confirmPlanTool = tool(
    async (input: z.infer<typeof confirmPlanSchema>) => {
        const { plan } = input;
        // The interrupt function is expected to return the user's textual input.
        const userInput = interrupt(
            `Current plan:
${plan}
Enter your feedback to revise the plan, or press enter to approve.`
        ) as string | null;

        if (userInput && userInput.trim()) {
            // If user provides input, treat it as a modification suggestion.
            return `User suggests modifying the plan: ${userInput}`;
        } else {
            // If user provides no input, confirm the plan.
            return "Plan Confirmed, process to execute";
        }
    },
    {
        name: "confirmPlan",
        schema: confirmPlanSchema,
        description: `
    Prompts the user to confirm or suggest modifications to a plan.
    User input is treated as a modification suggestion. No input means confirmation.
    `,
    }
);
