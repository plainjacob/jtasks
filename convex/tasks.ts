import { v } from "convex/values";
import { internalMutation, mutation, query } from "./_generated/server";

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

export const getTaskById = query({
  args: {
    taskId: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get("tasks", args.taskId);
  },
});

export const editTask = mutation({
  args: {
    taskId: v.id("tasks"),
    title: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch("tasks", args.taskId, {
      title: args.title,
      description: args.description,
    });
  },
});

export const cleanUpCompletedTasks = internalMutation({
  args: {},
  handler: async (ctx) => {
    const tasks = await ctx.db
      .query("tasks")
      .withIndex("by_completed", (q) =>
        q
          .eq("completed", true)
          .lt("_creationTime", Date.now() - 1000 * 60 * 60 * 24 * 90),
      )
      .collect();

    for (const task of tasks) {
      await ctx.db.delete(task._id);
    }
  },
});
