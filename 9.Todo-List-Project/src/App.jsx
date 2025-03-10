import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  // context api ya da redux ile yapmadigimizdan dolayi children dan parent a dogru veri gonderecegiz
  // hook tanimlasai yaptik
  const [todos, setTodos] = useState([]);

  // todoscreate e gonderecegimiz function i yaziyoruz
  const createTodo = (newTodo) => {
    // debugger
    // spread operatoru ile todos arrayine yeni todo ekleyecegiz
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoID) => {
    // debugger;

    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== todoID;
      }),
    ]);
  };

  const updateTodo = (updatedTodo) => {
    // debugger  
    const newUpdatedTodos = todos.map((todo) => {
      if (todo.id !== updateTodo.id) {
        return todo;
      }
      return updatedTodo;
      setTodos([...newUpdatedTodos]);
    });
    // console.log(updatedTodo)
  };

  return (
    <div>
      {/* todocreate e props ile function i yonlendiriyoruz */}
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} onRemoveItem={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
