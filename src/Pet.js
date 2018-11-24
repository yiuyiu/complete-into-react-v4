import React from "react";
// function component
const Pet = props => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, props.name),
  //     React.createElement("h2", {}, props.animal),
  //     React.createElement("h2", {}, props.breed)
  //   ]);
  return (
    <div id="my-id">
      <h1>{props.name}</h1>
    </div>
  );
};
export default Pet;
