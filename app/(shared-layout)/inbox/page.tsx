import { getTasks } from "@/app/actions";
import TaskList from "@/components/sections/TaskList";

export default async function Inbox() {
  const tasks = await getTasks({ completed: false });

  return (
    <>
      <h1 className="text-2xl font-semibold">Inbox</h1>
      <TaskList tasks={tasks} />
    </>
  );
}
