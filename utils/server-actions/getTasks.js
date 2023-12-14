'use server';
import prisma from "@/utils/db";

const getTasks = async () => await prisma.task.findMany({
  orderBy: {
    createdAt: "desc",
  }
});

export default getTasks;
