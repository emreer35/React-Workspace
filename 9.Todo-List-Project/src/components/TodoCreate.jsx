import { useState } from "react";

const TodoCreate = ({ onCreateTodo }) => {
  const [newTodo, setnewTodo] = useState("");
  const createTodo = () => {
    // debugger
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo,
    };
    console.log(request);
    onCreateTodo(request);
    clearInput();
  };

  const clearInput = () => {
    setnewTodo("");
  };

  return (
    <div className=" mb-10">
      <div className="text-center">
        <h1 className="font-medium text-3xl text-slate-600 shadow mb-8">
          Todo List
        </h1>
      </div>
      <input
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
        className="w-full px-2.5 py-1.5 text-sm text-slate-900 font-medium outline-none rounded-md border border-gray-200 focus:ring-1 focus:ring-slate-300 mb-4"
        placeholder="Enter Todo"
      />
      <div className="text-end">
        <button
          onClick={createTodo}
          className="text-sm px-2.5 py-1.5 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-400 transition-all duration-75"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoCreate;
