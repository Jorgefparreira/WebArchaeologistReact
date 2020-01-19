import React, { Component } from "react";
import BROWSER_WIN from "../assets/svg/browser";

class BrowserAnimation extends Component {
  render() {
    return (
      <div id="browser-animation">
        <BROWSER_WIN></BROWSER_WIN>
        <img
          id="broser-finish-img"
          className="img-fluid"
          alt="Web Arch Logo"
          src={require("../assets/web-arch-browser.png")}
        />
      </div>
    );
  }
}

export default BrowserAnimation;
