import React from 'react';
import TaskCard from '@/components/TaskCard';
import { Database } from '@/database.types';

type Task = Database['public']['Tables']['tasks']['Row']; 

type TaskListProps = {
  tasks: Task[];
  onTaskDeleted?: () => void;
};

export default function TaskList({ tasks, onTaskDeleted }: TaskListProps) {
  return (
    <ul className="flex flex-col mt-4">
      {tasks?.map((task, index) => (
        <React.Fragment key={task.id}>
          <TaskCard task={task} onTaskDeleted={onTaskDeleted} />
          {index != tasks.length - 1 && <hr className="border-gray-200" />}
        </React.Fragment>
      ))}
    </ul>
  );
}
