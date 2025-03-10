import { useSelector } from "react-redux";
import Todo from "./Todo";
import { RootState } from "../app/store";
import { TodoType } from "../types/Types";

export const TodoList = () => {
  const { todos } = useSelector((store: RootState) => store.todo);
  return (
    <div>
      {todos &&
        todos.map((todo: TodoType) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};
