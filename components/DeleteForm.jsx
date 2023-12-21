"use client";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
import { deleteTask } from "@/utils/actions";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-error btn-xs uppercase"
      disabled={pending}
    >
      {pending ? "pending..." : "delete"}
    </button>
  );
};

const initialState = {
  message: null,
};

export const DeleteForm = ({ id }) => {
  const [state, formAction] = useFormState(deleteTask, initialState);

  useEffect(() => {
    if (state.message === "error") {
      return toast.error("there was an error");
    }
    if (state.message) {
      toast.success("task deleted");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
};
