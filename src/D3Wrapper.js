import React from "react";
class libWrapper extends React.Component {
  componentDidMount() {
    lib.init(this.el);
  }
  componentWillUnmount() {
    lib.cleanUp(this.el);
  }
  // it will make the component never update
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <div ref={el => (this.el = el)} />;
  }
}
export default libWrapper;
