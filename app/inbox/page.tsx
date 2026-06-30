"use cache";

import TaskList from "@/components/sections/TaskList";

export default async function Inbox() {
  const tasks = [
    {
      title: "test",
      description: "this is a test",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold">Inbox</h1>
      <TaskList tasks={tasks} />
    </>
  );
}
