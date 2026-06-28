import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getUncompletedTasks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("completed"), false))
      .collect();
  },
});

export const getCompletedTasks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("completed"), true))
      .collect();
  },
});

export const createTask = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    completed: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("tasks", {
      title: args.title,
      description: args.description,
      completed: false,
    });
  },
});

export const completeTask = mutation({
  args: {
    taskId: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    const task = await ctx.db.get(args.taskId);

    if (!task) {
      throw new Error("Task not found");
    }

    await ctx.db.patch(args.taskId, {
      completed: !task.completed,
    });
  },
});

export const deleteTask = mutation({
  args: {
    taskId: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.taskId);
  },
});
