import "./App.css";
import { TodoCreate } from "./components/TodoCreate";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className=" container p-4 mx-auto mt-10 max-w-2xl border border-gray-300 shadow-xl rounded-xl">
      <div className="text-center mb-10 text-5xl text-cyan-500 font-bold tracking-widest ">
        ToDo List
      </div>
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
