import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AdjectiveToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  selectAdjective = () => {
    const newState = !this.state.toggle;
    this.setState({ toggle: newState });
  };

  render() {
    return (
      <Button
        variant="light m-1"
        onClick={this.selectAdjective}
        active={this.state.toggle}
      >
        {this.props.adjective}
      </Button>
    );
  }
}
export default AdjectiveToggle;
