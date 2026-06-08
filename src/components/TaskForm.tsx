'use client';

import { createTask } from '@/app/actions/tasks';
import { useState } from 'react';

type TaskFormProps = {
  onTaskCreated?: () => void;
}

export default function TaskForm({ onTaskCreated }: TaskFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await createTask(formData);

    onTaskCreated?.();

    // Reset form
    setFormData({
      title: '',
      description: ''
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 mt-4">
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        className="border border-gray-200 rounded-md p-2 focus:border-lime-500 focus:outline-none focus:border-2"
      />
      <textarea
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
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
