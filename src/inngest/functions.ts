import prisma from "@/lib/db";
import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import * as Sentry from "@sentry/nextjs";

const google = createGoogleGenerativeAI();

export const execute = inngest.createFunction(
    { id: "execute-ai" },
    { event: "execute/ai" },
    async ({ event, step }) => {
        await step.sleep("pretend", "5s");
        const { steps } = await step.ai.wrap(
            "gemini-generate-text",
            generateText,
            {
                model: google("gemini-2.5-flash"),
                system: "You're a helpful assistant.",
                prompt: "What is 2 + 2?",
                experimental_telemetry: {
                    isEnabled: true,
                    recordInputs: true,
                    recordOutputs: true,
                },
            }
        );
        return steps;
    },
);