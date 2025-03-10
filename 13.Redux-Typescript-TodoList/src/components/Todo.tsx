import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
// import { useState } from "react";
import { removeTodoById, updateTodo } from "../app/slices/TodoSlice";
import { useState } from "react";
import { MdOutlineCheck } from "react-icons/md";

interface TodoPropsType {
  todo: TodoType;
}
const Todo = ({ todo }: TodoPropsType) => {
  const { id, content } = todo;

  const dispatch = useDispatch();
  const [check, setCheck] = useState<boolean>(false);
  const [updatedTodo, setupdatedTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdatedTodo = () => {
    if (!updatedTodo.trim()) return;
    const payload: TodoType = {
      id: id,
      content: updatedTodo,
    };
    dispatch(updateTodo(payload));
    setCheck(false);
  };
  return (
    <div >
      <div className="flex justify-between items-center mb-3">
        <div className="relative flex items-center w-full">
          <input
            className="relative w-full pe-20 rounded-lg  outline-none border border-gray-200 px-2.5 py-1.5 text-sm font-semibold text-slate-700"
            type="text"
            value={updatedTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setupdatedTodo(e.target.value)
            }
            disabled={!check}
          />
          <div className="absolute right-0 flex items-center justify-center px-2.5 py-2 bg-gray-300 rounded-r-lg space-x-4">
            {check ? (
              <MdOutlineCheck
                onClick={handleUpdatedTodo}
                className="text-slate-700 transition hover:text-blue-500 text-lg cursor-pointer"
              />
            ) : (
              <MdOutlineEdit
                onClick={() => setCheck(true)}
                className="text-slate-700 transition hover:text-green-500 text-lg cursor-pointer"
              />
            )}
            <MdDeleteOutline
              onClick={handleRemoveTodo}
              className="text-slate-700 transition hover:text-red-500 text-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
