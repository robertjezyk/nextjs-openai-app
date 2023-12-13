import deleteTask from "@/utils/server-actions/deleteTask";

export const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-error btn-xs uppercase">delete</button>
    </form>
  );
};
