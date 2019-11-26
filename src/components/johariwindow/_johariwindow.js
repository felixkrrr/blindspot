import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
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
        <h2>Your Johari Window</h2>
        <div className="johariWindow">
          <div className="window">
            <h4>Open</h4>
            {this.computeOpen().map(function(item, i) {
              return (
                <h4>
                  <Button disabled variant="secondary" key={i}>
                    {item}
                  </Button>
                </h4>
              );
            })}
          </div>
          <div className="window">
            <h4>Blind</h4>
            {this.computeBlind().map(function(item, i) {
              return (
                <h4>
                  <Button disabled variant="secondary" key={i}>
                    {item}
                  </Button>
                </h4>
              );
            })}
          </div>
          <div className="window">
            <h4>Hidden</h4>
            {this.computeHidden().map(function(item, i) {
              return (
                <h4>
                  <Button disabled variant="secondary" key={i}>
                    {item}
                  </Button>
                </h4>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default JohariWindow;
