import React, { Component } from "react";
import PropTypes from "prop-types";

import About from "./About.js";
import Experience from "./Experience.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

import { withStyles } from "@material-ui/core/styles";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Main;
