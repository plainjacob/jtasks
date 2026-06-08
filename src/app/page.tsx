'use client';

import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { createClient } from '@/app/utils/supabase/client';
import { Database } from '@/database.types';

type Task = Database['public']['Tables']['tasks']['Row']; 

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function fetchTasks() {
    const supabase = createClient();

    const { data, error } = await supabase.from('tasks').select('*');

    if (error) {
      console.error('Error reading task: ', error.message);
      return;
    }

    setTasks(data ?? []);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="h-screen w-full flex items-start">
      <Sidebar />
      {/* Main content */}
      <div className="px-4 flex-1 flex flex-col">
        <header className="text-center mt-4">
          <h1 className="text-4xl">JTasks</h1>
        </header>
        <TaskList tasks={tasks} onTaskDeleted={fetchTasks} />
        <TaskForm onTaskCreated={fetchTasks} />
      </div>
    </div>
  );
}
