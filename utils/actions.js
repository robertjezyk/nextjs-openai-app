'use server';
import { revalidatePath } from 'next/cache';
import prisma from "@/utils/db";

export const getAllTasks = async () => await prisma.task.findMany({
  orderBy: {
    createdAt: "desc",
  }
});

export const createTask = async formData => {
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

export const deleteTask = async formData => {
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
