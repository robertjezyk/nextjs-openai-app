'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';

const deleteTask = async formData => {
  const id = formData.get('id');

  await prisma.task.delete({
    where: {
      id
    }
  })
  // revalidate path
  revalidatePath('/prisma-example');
};

export default deleteTask;
