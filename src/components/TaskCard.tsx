import { Tables } from '@/database.types';

export default function TaskCard(task: Tables<'tasks'>) {
  return (
    <div className="p-2">
      <h2 className="text-xl">{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}
