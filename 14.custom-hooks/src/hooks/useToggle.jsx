import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const open = () => {
    setToggle(!toggle);
  };
  return {
    open,
    toggle,
  };
};

export default useToggle;
