import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./about.css";
import baseAdjectives from "../../../const/adjectives";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <h1>About</h1>
          <p>
            The Johari Window was invented by Joseph Luft and Harrington Ingham
            in the 1950s as a model for mapping personality awareness. By
            describing yourself from a fixed list of adjectives, then asking
            your friends and colleagues to describe you from the same list, a
            grid of overlap and difference can be built up.
          </p>
          <h3>The quadrants</h3>
          <ul>
            <li>
              Open: selected by both, the subject and peers. These are traits
              that subject and peers perceive.
            </li>
            <li>
              Blind: not selected by subjects, but only by their peers. These
              represent what others perceive but the subject does not.
            </li>
            <li>
              Hidden: selected by the subject, but not by any of their peers.
              These are things the peers are either unaware of, or that are
              untrue but for the subject’s claim.
            </li>
            <li>
              Unknown: selected by neither subject nor peers selected. They
              represent subject’s behaviors or motives that no one participating
              recognizes—either because they do not apply or because of
              collective ignorance of these traits.
            </li>
          </ul>
          <h3>The adjectives</h3>
          <Table>
            {baseAdjectives.map(function(name, index) {
              return <tr key={index}>{name}</tr>;
            })}
          </Table>
        </div>
      </div>
    );
  }
}

export default About;
