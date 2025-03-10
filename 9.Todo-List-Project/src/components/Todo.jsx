import { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

const Todo = ({ todo, onRemoveItem ,updateTodo }) => {
  const { id, content } = todo;

  const [check, setCheck] = useState(false);
  const [newTodo, setnewTodo] = useState(content)

  const removeItem = () => {
    // debugger
    onRemoveItem(id);
  };

  const updateInput = (e)=>{
    setnewTodo(e.target.value)
  }
  const updatedTodo = ()=>{
    // debugger

    const request = {
      id:id,
      content:newTodo
    }
    updateTodo(request)
    setCheck(false)
  }

  
  return (
    <div className="flex items-center justify-between space-x-4 mb-4 border bg-slate-100 pe-3 rounded-md">
      <input
        value={newTodo}
        onChange={updateInput}
        className="w-full px-2.5 py-1.5 text-sm text-slate-900 font-medium outline-none rounded-md border border-gray-200 disabled:bg-white"
        disabled={!check} 
      />
      <div className="flex space-x-4">
        {check ? (
          <CiCircleCheck onClick={updatedTodo}  className="text-slate-900 cursor-pointer hover:text-blue-500" />
        ) : (
          <HiOutlinePencilSquare onClick={()=>setCheck(true)} className="text-slate-900 cursor-pointer hover:text-green-500" />
        )}
        <MdDeleteOutline
          onClick={removeItem}
          className="text-slate-900 cursor-pointer hover:text-red-500"
        />
      </div>
    </div>
  );
};

export default Todo;
