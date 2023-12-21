import { TaskList } from "@/components/TaskList";
// import { TaskForm } from "@/components/TaskForm";
import { TaskFormCustom } from "@/components/TaskFormCustom";
export const dynamic = "force-dynamic";

const TasksPage = () => {
  return (
    <>
      <h1 className="text-7xl mb-8">Tasks Page</h1>
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </>
  );
};

export default TasksPage;
