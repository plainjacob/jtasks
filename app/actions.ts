"use server";

import { createClient } from "@/lib/supabase/server";
import z from "zod";
import { taskSchema } from "./schemas/task";
import { revalidatePath } from "next/cache";
import { Tables } from "@/lib/supabase";

export async function createTaskAction(data: z.infer<typeof taskSchema>) {
  const supabase = await createClient();

  const { error } = await supabase.from("tasks").insert({
    title: data.title,
    description: data.description,
    difficulty: data.difficulty,
    completed: false,
  });

  if (error) {
    console.error(error.message);
    return;
  }

  revalidatePath("/inbox");
}

export async function completeTaskAction(taskId: Tables<"tasks">["id"]) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("tasks")
    .update({ completed: true })
    .eq("id", taskId);

  if (error) {
    console.error(error.message);
    return;
  }

  revalidatePath("/inbox");
  revalidatePath("/completed");
}

export async function deleteTaskAction(taskId: Tables<"tasks">["id"]) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("tasks")
    .update({ archived_at: new Date().toISOString() })
    .eq("id", taskId);

  if (error) {
    console.error(error.message);
    return;
  }

  revalidatePath("/inbox");
  revalidatePath("/completed");
}

export async function getTaskById(taskId: Tables<"tasks">["id"]) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("Not authenticated");
  }

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", user?.id)
    .eq("id", taskId)
    .single();

  if (error) {
    console.error(error.message);
  }

  return data;
}

export async function updateTaskAction(
  taskId: Tables<"tasks">["id"],
  data: {
    title: string;
    description: string;
    difficulty: string;
  },
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("Not authenticated");
  }

  const { error } = await supabase
    .from("tasks")
    .update({
      title: data.title,
      description: data.description,
      difficulty: data.difficulty,
    })
    .eq("id", taskId);

  if (error) {
    console.error(error.message);
    return;
  }

  revalidatePath("/inbox");
}
