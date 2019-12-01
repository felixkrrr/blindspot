import React, { Component } from "react";
import { connect } from "react-redux";

import {
  deSelectAdjectives,
  selectAdjectives
} from "../../store/actions/adjectiveActions";

//Custom
import AdjectiveToggle from "../button/adjectivetoggle/_adjectivetoggle";
import AdjectiveSelection from "../adjectiveselection/adjectiveselection";

class AdjectiveToggleGroup extends Component {
  handleSelect = adjective => {
    //Checks if item is already selected; not to select it again
    if (!this.props.selectedAdjectives.includes(adjective)) {
      this.props.selectAdjectives(adjective);
    } else {
      console.log("Item was already in Array");
    }
  };

  handleDeSelect = adjective => {
    //removes variable input from array
    this.props.deSelectAdjective(adjective);
  };

  render() {
    console.log(this.props.selectedAdjectives);
    return (
      <div>
        <AdjectiveSelection />
        <h2>Select</h2>
        {this.props.baseAdjectives.map(function(item, i) {
          return (
            <AdjectiveToggle
              adjective={item}
              key={i}
              onSelect={this.handleSelect}
              onDeSelect={this.handleDeSelect}
              selected={this.props.selectedAdjectives.includes(item)}
            />
          );
        }, this)}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    selectedAdjectives: state.adjectives.selectedAdjectives,
    baseAdjectives: state.adjectives.baseAdjectives
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    deSelectAdjective: adjective => {
      dispatch(deSelectAdjectives(adjective));
    },
    selectAdjectives: adjective => {
      dispatch(selectAdjectives(adjective));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AdjectiveToggleGroup);
