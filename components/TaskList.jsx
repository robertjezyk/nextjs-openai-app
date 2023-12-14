import Link from 'next/link';
import { DeleteForm } from "@/components/DeleteForm";
import { getAllTasks } from "@/utils/actions";

export const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
  }

  return (
    <ul className="mt-8">
    {tasks.map(task => (
      <li className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg" key={task.id}>
        <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>{task.content}</h2>
        <div className="flex gap-6 items-center">
          <Link href="" className="btn btn-accent btn-xs uppercase">Edit</Link>
          <DeleteForm id={task.id} />
        </div>
      </li>
    ))}
    </ul>
  );
};
