import React from "react";
const AdoptModalContent = props => (
  <React.Fragment>
    <h1>Would you like to adpot {props.name}?</h1>
    <div className="buttons">
      <button onClick={props.toggleModal}>Yes</button>
      <button onClick={props.toggleModal}>Definitely Yes</button>
    </div>
  </React.Fragment>
);
export default AdoptModalContent;
