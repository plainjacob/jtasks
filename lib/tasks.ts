import { createClient } from "./supabase/server";

export async function getTasks({ completed }: { completed: boolean }) {
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
    .eq("user_id", user.id);

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}
