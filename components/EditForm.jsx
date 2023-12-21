import { getTaskById } from '@/utils/actions';
import { updateTask } from '@/utils/actions';

export const EditForm = async ({ id }) => {
  const task = await getTaskById(id);

  return (
    <form action={updateTask} className="max-w-sm p-12 border border-base-300 rounded-lg">
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        defaultValue={task.content}
        className="input input-bordered w-full"
        name="content"
        required
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            id="completed"
            type="checkbox"
            defaultChecked={task.completed}
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-active btn-primary btn-block btn-sm" type="submit">Edit</button>
    </form>
  );
};
