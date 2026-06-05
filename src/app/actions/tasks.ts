'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Database } from '@/database.types';

type TaskInsert = Database['public']['Tables']['tasks']['Insert'];

export async function createTask(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get('title');
  const description = formData.get('description');

  if (typeof title !== 'string' || title.trim() === '') {
    throw new Error('Title is required');
  }
  const descriptionValue = typeof description === 'string' ? description.trim() || null : null;

  const task: TaskInsert = {
    title,
    description: descriptionValue,
  };

  console.log(description);

  await supabase.from('tasks').insert(task);
}
