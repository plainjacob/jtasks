'use server';

import { createClient } from '@/app/utils/supabase/client';
import { Database } from '@/database.types';

type TaskInsert = Database['public']['Tables']['tasks']['Insert'];

export async function createTask(formData: { title: string, description: string}) {
  const supabase = createClient();

  const { title, description }  = formData;

  if (typeof title !== 'string' || title.trim() === '') {
    throw new Error('Title is required');
  }
  const descriptionValue = typeof description === 'string' ? description.trim() || null : null;

  const task: TaskInsert = {
    title,
    description: descriptionValue,
  };

  const { error } = await supabase.from('tasks').insert(task).single();

  if (error) {
    console.error('Error adding task: ', error.message);
    return;
  }
}

export async function deleteTask(id: number) {
  const supabase = createClient();

  const { error } = await supabase.from('tasks').delete().eq('id', id);

  if (error) {
    console.error('Error deleting task: ', error.message);
    return;
  } 
}