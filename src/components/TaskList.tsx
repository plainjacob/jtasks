import Task from '@/components/Task';
import { createClient } from '@/app/services/supabase/client';
import { cookies } from 'next/headers';

export default async function TaskList() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: tasks } = await supabase.from('tasks').select()

  return (
    <ul className='flex flex-col mt-4'>
      {tasks?.map((task, index) => (
        <>
          <Task key={task.id} title={task.title} description={task.desription} />
          {index != tasks.length - 1 && <hr className='border-gray-200'/>}
        </>
      ))}
    </ul>
  );
}