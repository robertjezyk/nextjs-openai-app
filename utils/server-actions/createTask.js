'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';

const createTask = async formData => {
  const content = formData.get('content');
  // some validation here

  await prisma.task.create({
    data: {
      content
    }
  });
  // revalidate path
  revalidatePath('/tasks');
};

export default createTask;
