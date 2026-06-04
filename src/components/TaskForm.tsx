'use client';

import { useState } from "react";

export default function TaskForm() {
  const [newTask, setNewTask] = useState({ title: '', description: ''});

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="self-end flex flex-col gap-1 mt-4">
      <input 
        type="text" 
        placeholder="Title"
        onChange={
          (e) => setNewTask((prev) => ({...prev, title: e.target.value }))
        }  
        className="border border-gray-200 rounded-md p-2 focus:border-lime-500 focus:outline-none focus:border-2"
      />
      <textarea 
        placeholder="Description"
        onChange={
          (e) => setNewTask((prev) => ({...prev, description: e.target.value }))
        }
        className="border border-gray-200 rounded-md p-2 focus:border-lime-500 focus:outline-none focus:border-2" 
      />
      <button 
        type="submit" 
        className="bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-md font-bold text-lg"
      >
        Add Task
      </button>
    </form>
  )
}