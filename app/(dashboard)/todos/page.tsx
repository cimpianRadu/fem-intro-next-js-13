import TodoList from '@/app/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  // await new Promise((resolve, reject) => setTimeout(reject, 2000));
  const todos = await db.todo.findMany({});
  return todos;
};

const Todos = async () => {
  const todos = await getData();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
