import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: " ",
    lastName: " "
  });

  const [heading, setHeading] = useState(" ");
  const [isMouseOver, setMouseOver] = useState(false);

  function HandleClick(e) {
    setHeading(fullName.firstName + " " + fullName.lastName);
    e.preventDefault();
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function HandleChange(e) {
    const { value, name } = e.target;

    setFullName((p) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: p.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: p.firstName,
          lastName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={HandleClick}>
        <input onChange={HandleChange} name="fName" placeholder="First Name" />
        <input onChange={HandleChange} name="lName" placeholder="Last Name" />
        <button
          style={{ backgroundColor: isMouseOver ? "blue" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
