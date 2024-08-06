'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const createTodo = async (formData) => {
  const todo = await db.todo.create({
    data: { content: formData.get('content'), title: formData.get('title') },
  });

  revalidatePath('/todos');
};

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: { completed: true },
  });

  revalidatePath('/todos');
};
