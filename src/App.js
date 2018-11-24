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
    return (
      <React.Fragment>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </React.Fragment>
    );
  }
}

// React.createElement(App) create instance of app
render(React.createElement(App), document.getElementById("root"));
