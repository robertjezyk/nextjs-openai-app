'use client';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { createTaskCustom } from "@/utils/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn join-item btn-primary uppercase" disabled={pending}>
      {pending ? 'Please wait...' : 'create task'}
    </button>
  );
};

export const TaskFormCustom = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object from the form
    const formData = new FormData(formRef.current);

    // Call server action, e.g., createTaskCustom
    await createTaskCustom(formData);

    // Reset the form input
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
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
