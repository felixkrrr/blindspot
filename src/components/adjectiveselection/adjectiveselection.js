import React, { Component } from "react";
//import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

class AdjectiveSelection extends Component {
  render() {
    return (
      <div>
        <h3>Your adjectives</h3>
        <h5>
          {this.props.selectedAdjectives.map(function(item, i) {
            return (
              <Button
                className="m-1"
                disabled
                variant="secondary"
                key={"selected" + i}
                size="sm"
              >
                {item}
              </Button>
            );
          }, this)}
        </h5>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    selectedAdjectives: state.adjectives.selectedAdjectives
  };
};
export default connect(mapStatetoProps)(AdjectiveSelection);
