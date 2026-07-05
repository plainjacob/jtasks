import { Tables } from "./supabase";
import { createClient } from "./supabase/server";

export async function getTasks(completed: Tables<"tasks">["completed"]) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("Not authenticated");
    return [];
  }

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("completed", completed)
    .eq("user_id", user.id)
    .is("archived_at", null);

  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
}

export async function getArchivedTasks() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("Not authenticated");
    return [];
  }

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", user.id)
    .not("archived_at", "is", null);

  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
}
