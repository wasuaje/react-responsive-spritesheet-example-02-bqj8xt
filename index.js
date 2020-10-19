import React, { Component } from "react";
import { render } from "react-dom";
import Spritesheet from "react-responsive-spritesheet";
import "./style.css";
import Ship from "./Ship.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="rrs-container">
        <img
          src="https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/logo/rrs-logo.png"
          width="250"
          height="250"
        />
        <hr />

        <Spritesheet
          className={`my-element__class--style`}
          image={Ship}
          widthFrame={20}
          heightFrame={40}
          fps={20}
          steps={15}
          startAt={1}
          endAt={260}
          autoplay={false}
          loop={true}
          onMouseEnter={spritesheet => {
            spritesheet.play();
          }}
          onMouseLeave={spritesheet => {
            spritesheet.pause();
          }}
        />

        <hr />
        <p>
          image source:
          <br />
          <a
            href="https://www.spriters-resource.com/resources/sheets/133/136347.png?updated=1595882136"
            target="_blank"
          >
            <img
              src="https://www.spriters-resource.com/resources/sheets/93/96603.png?updated=1506289701"
              width="40%"
            />
            <small>&#x2197;</small>
          </a>
        </p>
        <hr />
        <p>
          <a href="https://stackblitz.com/edit/react-responsive-spritesheet-example-02?file=index.js">
            edit source code<small>&#x2197;</small>
          </a>
          <br />
          <br />
          <a
            href="https://github.com/danilosetra/react-responsive-spritesheet"
            target="_blank"
          >
            see docs and other examples on GitHub <small>&#x2197;</small>
          </a>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
