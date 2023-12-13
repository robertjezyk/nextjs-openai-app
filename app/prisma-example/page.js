import prisma from "@/utils/db";
import { TaskList } from "@/components/TaskList";
import { TaskForm } from "@/components/TaskForm";

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "my first hardcoded task",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    }
  });
  return allTasks;
};

const prismaGetTasks = async () => await prisma.task.findMany({
  orderBy: {
    createdAt: "desc",
  }
});

const PrismaExamplePage = async () => {
  const tasks = await prismaGetTasks();

  return (
    <>
      <h1 className="text-7xl mb-8">Prisma Example Page</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  );
};

export default PrismaExamplePage;