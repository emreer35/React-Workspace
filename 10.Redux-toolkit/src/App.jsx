import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/CounterSlice";

function App() {
  // taimladigmiz state i store icerisinde bulunan counter adinda slice i seciyoruz
  // const state = useSelector((store) => store.counter);
  // console.log(state)

  // counterSlice in initialState ini doner
  // initial state degerine erismek icin useSelector yontemini kullaniriz
  const { value } = useSelector((store) => store.counter);
  console.log(value);

  // increment ve decrement fonksiyonlarini cagirabilmek icin cektik
  const dispatch = useDispatch();

  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export default App;
