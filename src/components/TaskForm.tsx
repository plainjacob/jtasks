'use client';

import { createTask } from '@/app/actions/tasks';

export default function TaskForm() {
  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target);
    createTask(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="self-end flex flex-col gap-1 mt-4">
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="border border-gray-200 rounded-md p-2 focus:border-lime-500 focus:outline-none focus:border-2"
      />
      <textarea
        placeholder="Description"
        name="description"
        className="border border-gray-200 rounded-md p-2 focus:border-lime-500 focus:outline-none focus:border-2"
      />
      <button
        type="submit"
        className="bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-md font-bold text-lg"
      >
        Add Task
      </button>
    </form>
  );
}
