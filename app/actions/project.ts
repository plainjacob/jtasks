"use server";

import { createClient } from "@/lib/supabase/server";
import { projectSchema } from "../schemas/project";
import z from "zod";

export async function createProjectAction(data: z.infer<typeof projectSchema>) {
  const supabase = await createClient();

  const { error } = await supabase.from("projects").insert({
    title: data.title,
  });

  if (error) {
    console.error(error.message);
    return;
  }
}
