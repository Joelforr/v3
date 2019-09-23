import React, { Component } from "react";

import { SlideUpNav, SlideUpNavItem } from "./slideupbutton.js";
import BorderSlide from "./slidingborderbutton.js";

import "../css/slideoutmenu.css";

class SlideOutMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="nav-container"
          style={{
            transform: this.props.open ? "translateX(0vw)" : ""
          }}
          onClick={() => this.props.onClose()}
        >
          <div className="slideout-nav">
            <SlideUpNav direction="column">
              <SlideUpNavItem target="/#about" color="#f22987">
                About
              </SlideUpNavItem>
              <SlideUpNavItem target="/#experience" color="#f7b64e">
                Experience
              </SlideUpNavItem>
              <SlideUpNavItem target="/#projects" color="#69e2c4">
                Projects
              </SlideUpNavItem>
              <SlideUpNavItem target="/#contact" color="#a37ef2">
                Contact
              </SlideUpNavItem>
            </SlideUpNav>
            <BorderSlide href={require("../assets/resume.pdf")}>
              Resume
            </BorderSlide>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { SlideOutMenu };
