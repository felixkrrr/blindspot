import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

class AdjectiveSelection extends Component {
  render() {
    return (
      <div>
        <h2>Your adjectives</h2>
        <h4>
          {this.props.selectedAdjectives.map(function(item, i) {
            return (
              <Badge
                pill
                variant="secondary"
                key={i}
                Style="margin-right: 10px"
              >
                {item}
              </Badge>
            );
          }, this)}
        </h4>
      </div>
    );
  }
}
export default AdjectiveSelection;
