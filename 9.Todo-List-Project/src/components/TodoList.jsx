import Todo from "./Todo";

const TodoList = ({ todos, onRemoveItem , updateTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onRemoveItem={onRemoveItem} updateTodo={updateTodo} />
      ))}
    </div>
  );
};

export default TodoList;
