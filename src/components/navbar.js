import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

import { withStyles } from "@material-ui/core/styles";

import BorderSlide from "./slidingborderbutton.js";
import { SlideUpNav, SlideUpNavItem } from "./slideupbutton.js";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  navigation: {
    background: "#282c34",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)"
  },
  leftAlign: {
    textAlign: "left"
  },
  rightAlign: {
    width: "100%",
    textAlign: "right"
  }
});

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} directions="down" in={!trigger}>
      {children}
    </Slide>
  );
}

class NavBarComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <HideOnScroll {...this.props}>
          <AppBar>
            <Toolbar className={classes.navigation}>
              <div>Icon</div>
              <div style={{ marginLeft: "auto" }} />
              <SlideUpNav>
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
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    );
  }
}

NavBarComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBarComponent);
