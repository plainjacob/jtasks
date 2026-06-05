import { createClient } from '@/app/utils/supabase/server';
import React from 'react';
import TaskCard from '@/components/TaskCard';

export default async function TaskList() {
  const supabase = await createClient();

  const { data: tasks } = await supabase.from('tasks').select();

  return (
    <ul className="flex flex-col mt-4">
      {tasks?.map((task, index) => (
        <React.Fragment key={task.id}>
          <TaskCard {...task} />
          {index != tasks.length - 1 && <hr className="border-gray-200" />}
        </React.Fragment>
      ))}
    </ul>
  );
}
