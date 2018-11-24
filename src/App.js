import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
// class component
// one component should be in one file event it has only five lines
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick }, //this refer to the particular App,instance
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "havanese"
      }),
      React.createElement(Pet, {
  :      name: "Pepper",
        animal: "bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "Mixed"
      })
    ]);
  }
}

// React.createElement(App) create instance of app
render(React.createElement(App), document.getElementById("root"));
