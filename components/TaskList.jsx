import { DeleteForm } from "@/components/DeleteForm";

export const TaskList = ({ tasks }) => {
  return (
    <ul className="mt-8">
    {tasks.map(task => (
      <li className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg" key={task.id}>
        <h2 className="text-lg capitalize null">{task.content}</h2>
        <div className="flex gap-6">
          <button className="btn btn-accent btn-xs uppercase">Edit</button>
          <DeleteForm id={task.id} />
        </div>
      </li>
    ))}
    </ul>
  );
};
