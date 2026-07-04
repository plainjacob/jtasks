"use server";

import { createClient } from "@/lib/supabase/server";
import z from "zod";
import { taskSchema } from "./schemas/task";
import { revalidatePath } from "next/cache";

export async function addTask(data: z.infer<typeof taskSchema>) {
  const supabase = await createClient();

  const { error } = await supabase.from("tasks").insert({
    title: data.title,
    description: data.description,
    completed: false,
  });

  if (error) {
    console.error(error.message);
  }

  revalidatePath("/inbox");
}
