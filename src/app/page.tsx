import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className='h-screen w-full flex items-start'>
      <Sidebar />
      {/* Main content */}
      <div className="px-4 flex-1 flex flex-col">
        <header className="text-center mt-4">
          <h1 className="text-4xl">JTasks</h1>
        </header>
        <TaskList />
        <TaskForm />
      </div>
    </div>
  );
}
