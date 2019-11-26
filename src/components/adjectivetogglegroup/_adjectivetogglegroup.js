import React, { Component } from "react";
import AdjectiveToggle from "../button/adjectivetoggle/_adjectivetoggle";
import AdjectiveSelection from "../adjectiveselection/adjectiveselection";

class AdjectiveToggleGroup extends Component {
  state = {
    selectedAdjectives: []
  };

  handleSelect = adjective => {
    let selectedAdjectives = this.state.selectedAdjectives.concat(adjective);
    this.setState({ selectedAdjectives });
  };

  handleDeSelect = adjective => {
    let selectedAdjectives = this.state.selectedAdjectives;
    //removes variable input from array
    for (var i = 0; i < this.state.selectedAdjectives.length; i++) {
      if (this.state.selectedAdjectives[i] === adjective) {
        selectedAdjectives.splice(i, 1);
      }
      this.setState({ selectedAdjectives });
    }
  };

  render() {
    console.log(this.state.selectedAdjectives);
    return (
      <div>
        <AdjectiveSelection
          selectedAdjectives={this.state.selectedAdjectives}
        />
        <h2>Select</h2>
        {this.props.baseAdjectives.map(function(item, i) {
          return (
            <AdjectiveToggle
              adjective={item}
              key={i}
              onSelect={this.handleSelect}
              onDeSelect={this.handleDeSelect}
            />
          );
        }, this)}
      </div>
    );
  }
}
export default AdjectiveToggleGroup;
