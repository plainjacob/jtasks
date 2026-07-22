import { z } from "zod";

export const taskSchema = z.object({
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(["easy", "medium", "hard"]),
  due_date: z.date(),
});
