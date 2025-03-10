import { useDispatch } from "react-redux";
import { TodoType } from "../types/Types";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { createTodo } from "../app/slices/TodoSlice";

export const TodoCreate = () => {
  const dispatch = useDispatch();

  const [newTodo, setnewTodo] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleCreateTodo = () => {
    setError(null);
    setSuccess(null);
    if (newTodo.trim().length === 0) {
      setError("Lutfen bir todo giriniz.");
      setTimeout(() => setError(null), 3000);
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setSuccess("Todo basarilir bir sekilde eklendi");
    setnewTodo("");
    setTimeout(() => setSuccess(null), 3000);
    return;
  };
  return (
    <div className="mb-12 ">
      {error && (
        <Alert severity="error" className="mb-2">
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" className="mb-2">
          {success}
        </Alert>
      )}

      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setnewTodo(e.target.value)
          }
          className="px-2.5 py-1.5 rounded outline-none focus:ring-1 mb-4 text-gray-700 font-semibold focus:ring-gray-500 shadow w-full border border-gray-300"
        />
      </div>
      <div className="text-end">
        <button
          onClick={handleCreateTodo}
          className="pointer bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition w-1/4 font-medium"
        >
          Todo Ekle
        </button>
      </div>
    </div>
  );
};
