import React, { Component } from "react";
import AdjectiveToggle from "../button/adjectivetoggle/_adjectivetoggle";

class AdjectiveToggleGroup extends Component {
  render() {
    return (
      <div>
        {this.props.baseAdjectives.map(function(item, i) {
          return <AdjectiveToggle adjective={item} key={i} />;
        })}
      </div>
    );
  }
}
export default AdjectiveToggleGroup;
