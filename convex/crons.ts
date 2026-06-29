import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.daily(
  "cleanup completed tasks",
  {
    hourUTC: 4,
    minuteUTC: 0,
  },
  internal.tasks.cleanUpCompletedTasks,
);

export default crons;
