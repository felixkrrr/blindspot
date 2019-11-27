import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AdjectiveToggle extends Component {
  state = {
    toggle: false
  };
  selectAdjective = props => {
    this.props.selected !== true && this.props.onSelect(this.props.adjective); //if not selected then select adjective
    this.props.selected !== false &&
      this.props.onDeSelect(this.props.adjective); // if selected then deSelect adjective
    const newState = !this.state.toggle; //flip toggle state
    this.setState({ toggle: newState }); //update state
  };

  render() {
    return (
      <Button
        variant="outline-secondary m-1"
        onClick={this.selectAdjective}
        active={this.props.selected}
        className="adjective-pill"
        size="sm"
      >
        {this.props.adjective}
      </Button>
    );
  }
}
export default AdjectiveToggle;
