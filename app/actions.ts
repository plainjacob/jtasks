"use server";

import { z } from "zod";
import { taskSchema } from "./schemas/task";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { updateTag } from "next/cache";
import { Id } from "@/convex/_generated/dataModel";

export async function createTaskAction(data: z.infer<typeof taskSchema>) {
  try {
    const parsed = taskSchema.safeParse(data);

    if (!parsed.success) {
      throw new Error("Error parsing task");
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

export async function completeTaskAction(taskId: Id<"tasks">) {
  await fetchMutation(api.tasks.completeTask, {
    taskId: taskId,
  });

  updateTag("tasks");
}

export async function deleteTaskAction(taskId: Id<"tasks">) {
  await fetchMutation(api.tasks.completeTask, {
    taskId: taskId,
  });

  updateTag("tasks");
}

export type EditTask = {
  taskId: Id<"tasks">;
  title: string;
  description: string;
};

export async function editTaskAction(
  taskId: Id<"tasks">,
  data: z.infer<typeof taskSchema>,
) {
  await fetchMutation(api.tasks.editTask, {
    taskId: taskId,
    title: data.title,
    description: data.description,
  });

  updateTag("tasks");
}
