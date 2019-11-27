import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import "./_johariwindow.css";

class JohariWindow extends Component {
  computeOpen = () => {
    const own = this.props.selectedAdjectives;
    const others = this.props.selectedByOthers.map(function(obj) {
      return obj.adjective;
    });
    let open = own.filter(x => others.includes(x));
    return open;
  };

  computeBlind = () => {
    const own = this.props.selectedAdjectives;
    const others = this.props.selectedByOthers.map(function(obj) {
      return obj.adjective;
    });
    let blind = others.filter(x => !own.includes(x));
    return blind;
  };

  computeHidden = () => {
    const own = this.props.selectedAdjectives;
    const others = this.props.selectedByOthers.map(function(obj) {
      return obj.adjective;
    });
    let hidden = own.filter(x => !others.includes(x));
    return hidden;
  };

  computeCounter = item => {};

  render() {
    return (
      <div>
        <h3>Your Johari Window</h3>
        <div className="johariWindow">
          <div className="window">
            <h5>Open</h5>

            {this.computeOpen().map(function(item, i) {
              return (
                <h5 key={"open" + item}>
                  <Button disabled size="sm" variant="secondary" key={item + i}>
                    {item}
                  </Button>
                </h5>
              );
            })}
          </div>
          <div className="window">
            <h5 key="blind">Blind</h5>
            {this.computeBlind().map(function(item, i) {
              return (
                <h5 key={"blind" + item}>
                  <Button disabled size="sm" variant="secondary" key={item + i}>
                    {item}
                  </Button>
                </h5>
              );
            })}
          </div>
          <div className="window">
            <h5 key="hidden">Hidden</h5>
            {this.computeHidden().map(function(item, i) {
              return (
                <h5 key={"hidden" + item}>
                  <Button disabled size="sm" variant="secondary" key={item + i}>
                    {item}
                  </Button>
                </h5>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    selectedAdjectives: state.selectedAdjectives,
    baseAdjectives: state.baseAdjectives,
    selectedByOthers: state.selectedByOthers
  };
};

export default connect(mapStatetoProps)(JohariWindow);
