import Image from "next/image";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

export default function Home() {
  return (
    <div className="w-10/12">
      <header className="text-center mt-4">
        <h1 className="text-4xl">JTasks</h1>
      </header>
      <TaskList />
      <TaskForm />
    </div>
  );
}
