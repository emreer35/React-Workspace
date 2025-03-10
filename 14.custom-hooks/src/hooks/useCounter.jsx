import { useState } from "react";

const useCounter = () => {
  // hooksu muuz burada tanimladik
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount((count + 1));
  };
  const decrement = () => {
    setcount((count - 1));
  };
  // return ile obje olarak donduk
  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;
