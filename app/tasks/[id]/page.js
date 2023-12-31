import Link from 'next/link';
import { EditForm } from '@/components/EditForm';

const TaskPage = ({ params }) => (
  <div>
    <Link href="/tasks" className='btn btn-accent mb-8'>Back to tasks</Link>
    <EditForm id={params.id} />
  </div>
);

export default TaskPage;
