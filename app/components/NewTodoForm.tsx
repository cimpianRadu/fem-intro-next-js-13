import { createTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <div>
      <form action={createTodo}>
        <input
          className="border-2 border-red-400"
          type="text"
          placeholder="Title"
          name="title"
          required
        />
        <input
          className="border-2 border-red-400"
          type="text"
          placeholder="Content"
          name="content"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
