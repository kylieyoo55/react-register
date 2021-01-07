import React, { useState } from "react";




function App() {

const [MouseOver, setMouseOver]=useState(false);
const[name, setName]=useState(" ");
const[heading,setHeading]=useState(" ")


function HandleMouseOut(){
  setMouseOver(false)
  
// setColor("black")
}

function HandleMouseOver(){
  setMouseOver(true)
}

function HandleChange(e){
  setName(e.target.value)

}


function HandleClick(e){
  setHeading(name);

  e.preventDefault();
}

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={HandleClick}>
      <input
       onChange={HandleChange}
        type="text" 
        placeholder="What's your name?"
        // value={name}
        />
      <button 
      type="submit"
      style={{backgroundColor: MouseOver? "black": "white" }} 
      onMouseOver={HandleMouseOver} 
      onMouseOut={HandleMouseOut}

      >Submit</button>
      </form>
    </div>
  );
}

export default App;
