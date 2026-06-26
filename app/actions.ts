"use server";

import { z } from "zod";
import { taskSchema } from "./schemas/task";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { updateTag } from "next/cache";

export async function createTaskAction(values: z.infer<typeof taskSchema>) {
  try {
    const parsed = taskSchema.safeParse(values);

    if (!parsed.success) {
      throw new Error("Error task parsing");
    }

    await fetchMutation(api.tasks.createTask, {
      title: parsed.data.title,
      description: parsed.data.description,
      completed: false,
    });
  } catch {
    return {
      error: "Failed to create task",
    };
  }

  updateTag("tasks");
}
