import TaskForm from "@/components/sections/TaskForm";
import TaskList from "@/components/sections/TaskList";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between">
      <TaskList />
      <TaskForm />
    </div>
  );
}
