import React from "react";
import Inputs from "./Inputs"

function Form(){
return (
      <form className="form">

      <Inputs type="text" placeholder="Username" />
      <Inputs type="password" placeholder="Password" />
    <button type="submit">Login</button>
      </form>
)
}

export default Form;
