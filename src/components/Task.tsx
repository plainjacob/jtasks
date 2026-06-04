interface Task {
  title: string,
  description?: string
}

export default function Task({ title, description }: Task) {
  return (
    <div className="p-2">
      <h2 className="text-xl">{title}</h2>
      <p>{description}</p>
    </div>
  )
}