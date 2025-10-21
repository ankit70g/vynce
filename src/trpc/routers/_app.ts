import prisma from "@/lib/db";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { inngest } from "@/inngest/client";
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { TRPCError } from "@trpc/server";

export const appRouter = createTRPCRouter({
    testAi: baseProcedure.mutation(async () => {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Something went wrong" });
        await inngest.send({
            name: "execute/ai",
        });
        return { success: true, message: "Job queued" }
    }),
    getWorkflows: protectedProcedure.query(({ ctx }) => {
        return prisma.workflow.findMany();
    }),
    createWokflow: protectedProcedure.mutation(async () => {
        await inngest.send({
            name: "test/hello.world",
            data: {
                email: "ankit@mail.com",
            },
        });

        return { success: true, message: "Job queued" }
    }),
});
export type AppRouter = typeof appRouter;