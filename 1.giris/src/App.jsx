import React from "react";
import "./App.css";

function App() {
  const name = "emre";

  const names = ["emre", "sueda", "er"];
  return (
    <div>
      {names.map((name, key) => (
        <div
          style={{
            backgroundColor: "orange",
            fontSize: "2rem",
          }}
          key={key}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default App;
