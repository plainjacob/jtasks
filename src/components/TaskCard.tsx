import { Tables } from '@/database.types';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/16/solid';
import { deleteTask } from '@/app/actions/tasks';

type TaskCardProps = {
  task: Tables<'tasks'>;
  onTaskDeleted?: () => void;
};

export default function TaskCard({ task, onTaskDeleted }: TaskCardProps) {
  async function handleClick() {
    await deleteTask(task.id);

    onTaskDeleted?.();
  }

  return (
    <div className="p-2 flex justify-between">
      <div>
        <h2 className="text-xl">{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div>
        <button>
          <PencilSquareIcon className="size-5 text-black" />
        </button>
        <button onClick={handleClick}>
          <TrashIcon className="size-5 text-black" />
        </button>
      </div>
    </div>
  );
}
