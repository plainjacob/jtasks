import { createClient } from "./supabase/server";

export async function getProjects() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("Not authenticated");
    return [];
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id)
    .is("archived_at", null);

  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
}
