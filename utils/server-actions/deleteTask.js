'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';

const deleteTask = async formData => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = formData.get('id');

  await prisma.task.delete({
    where: {
      id
    }
  })
  // revalidate path
  revalidatePath('/tasks');
};

export default deleteTask;
