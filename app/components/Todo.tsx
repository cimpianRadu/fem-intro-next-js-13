'use client';
import { useTransition } from 'react';
import { completeTodo } from '@/utils/actions';

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  const handleComplete = () => {
    startTransition(() => completeTodo(todo.id));
  };

  return (
    <div
      onClick={() => startTransition(() => completeTodo(todo.id))}
      className={`border border-black/20 cursor-pointer  ${
        todo.completed && 'line-through text-gray-500'
      }`}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
