"use client";
import { useFormStatus, useFormState } from "react-dom";
import { createTaskCustom } from "@/utils/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn join-item btn-primary uppercase"
      disabled={pending}
    >
      {pending ? "Please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

export const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Add task"
          type="text"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};
