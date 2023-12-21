"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/utils/db";

export const getAllTasks = async () =>
  await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

export const createTask = async (formData) => {
  const content = formData.get("content");
  // some validation here

  await prisma.task.create({
    data: {
      content,
    },
  });
  // revalidate path
  revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    return { message: error?.errors[0]?.message ?? "error" };
  }
};

export const deleteTask = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = formData.get("id");

  try {
    await prisma.task.delete({
      where: {
        id,
      },
    });
    revalidatePath("/tasks");
    return { message: "deleted" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
};

export const getTaskById = async (id) =>
  await prisma.task.findUnique({
    where: { id },
  });

export const updateTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed") === "on";

  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed,
    },
  });
  revalidatePath("/tasks");
  redirect("/tasks");
};
