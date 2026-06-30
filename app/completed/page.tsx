"use cache";

import TaskList from "@/components/sections/TaskList";

export default async function Completed() {
  const tasks = [
    {
      _id: 1,
      title: "test",
      description: "this is a test",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold">Completed</h1>
      <TaskList tasks={tasks} />
    </>
  );
}
