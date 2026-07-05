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

  const { error } = await supabase.from("tasks").delete().eq("id", taskId);

  if (error) {
    console.error(error.message);
    return;
  }

  revalidatePath("/inbox");
  revalidatePath("/completed");
}
