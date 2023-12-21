"use server";
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

export const deleteTask = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = formData.get("id");

  await prisma.task.delete({
    where: {
      id,
    },
  });
  // revalidate path
  revalidatePath("/tasks");
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
