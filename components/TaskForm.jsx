'use client';
import { useRef } from 'react';
import createTask from '@/utils/server-actions/createTask';

export const TaskForm = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object from the form
    const formData = new FormData(formRef.current);

    // Call server action, e.g., createTask
    await createTask(formData);

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
        <button type="submit" className="btn join-item btn-primary uppercase">
          create task
        </button>
      </div>
    </form>
  );
};
