import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/CounterSlice";
import UserList from "./features/user/UserList";

function App() {
  const { value } = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <div>
      {value}
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      {/* user list */}
      <UserList />
    </div>
  );
}

export default App;
