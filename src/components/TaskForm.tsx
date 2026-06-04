export default function TaskForm() {
  return (
    <form className="self-end flex flex-col gap-1 mt-4">
      <input type="text" placeholder="Title" className="border border-gray-200 rounded-md p-2 focus:border-lime-500 focus:outline-none focus:border-2" />
      <textarea placeholder="Description"className="border border-gray-200 rounded-md p-2 focus:border-lime-500 focus:outline-none focus:border-2" />
      <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-md font-bold text-lg">Add Task</button>
    </form>
  )
}