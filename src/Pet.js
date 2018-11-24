import React from "react";
// function component
const Pet = props => {
  return (
    <div id="my-id" className="lol">
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet;
