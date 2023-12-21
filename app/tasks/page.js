import { TaskList } from "@/components/TaskList";
import { TaskForm } from "@/components/TaskForm";

const TasksPage = () => {
  return (
    <>
      <h1 className="text-7xl mb-8">Tasks Page</h1>
      <TaskForm />
      <TaskList />
    </>
  );
};

export default TasksPage;
