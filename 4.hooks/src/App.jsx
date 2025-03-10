import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Emre");
  const [lastName, setLastName] = useState("Er");
  const [names, setNames] = useState(["emre", "sueda", "yi", "seviyor"]);
  const [userInfo, setUserInfo] = useState({
    userName: "emreer",
    password: 123123,
  });
  const [show, setShow] = useState(false);

  const [count, setCount] = useState(0);

  const handleChange = () => {
    setFirstName("Sueda");
  };

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }else{
      return count
    }

    
  };
  return (
    <div>
      {firstName} {lastName}
      {/* <button onClick={() => setFirstName('Sueda')}>
        Degistir
      </button> */}
      <button onClick={handleChange}> Degistir</button>
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <div>
        {show ? (
          <div>
            {userInfo.userName} {userInfo.password}
          </div>
        ) : (
          <button onClick={() => setShow(true)}>Bilgileri Goster</button>
        )}
      </div>
        <div>
          <div>{count}</div>
          <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
          </div>
        </div>
    </div>
  );
}

export default App;
