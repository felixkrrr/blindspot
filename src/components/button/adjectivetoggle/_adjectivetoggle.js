import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AdjectiveToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  selectAdjective = props => {
    this.state.toggle !== true && this.props.onSelect(this.props.adjective); //if not selected then select adjective
    this.state.toggle !== false && this.props.onDeSelect(this.props.adjective); // if selected then deSelect adjective
    const newState = !this.state.toggle; //flip toggle state
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
