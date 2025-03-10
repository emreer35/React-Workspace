// import React from "react";
import { useState } from "react";
import "./App.css";
import useCopyClipboard from "./hooks/useCopyClipboard";
// import useToggle from "./hooks/useToggle";
// import useCounter from "./hooks/useCounter";

const App = () => {
  const [text, setText] = useState("");
  const [copied, copy] = useCopyClipboard(text);

  return (
    <div>
      {copied && "basariyla kopyalandi"}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={copy}>kopyala</button>
    </div>
  );
};

export default App;
