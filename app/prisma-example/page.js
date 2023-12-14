import { TaskList } from "@/components/TaskList";

const PrismaExamplePage = async () => {
  return (
    <>
      <h1 className="text-7xl mb-8">Prisma Example Page</h1>
      <TaskList />
    </>
  );
};

export default PrismaExamplePage;