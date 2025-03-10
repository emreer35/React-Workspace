import React from "react";
import Login from './Login'
import {users} from './Login'

const App = () => {
  console.log(users[0]);
  
  return (
    <div>
      <Login />

    </div>
  );
};

export default App;
