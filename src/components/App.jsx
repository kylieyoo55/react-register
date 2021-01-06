import React from "react";
import Login from "./Login"

var isLoggedIn=false;

function App() {
  return (
    <div className="container">
      {isLoggedIn?<h1>Hello Kylie</h1> : <Login />}
    </div>
  );
}

export default App;
