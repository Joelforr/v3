import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

import { withStyles } from "@material-ui/core/styles";

import BorderSlide from "./slidingborderbutton.js";
import { SlideUpNav, SlideUpNavItem } from "./slideupbutton.js";
import { MenuButton } from "./menubutton.js";
import { SlideOutMenu } from "./slideoutmenu.js";
import { IconButton } from "../components/icons.js";

import "../css/logo.css";
import "../css/navbar.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";
import zIndex from "@material-ui/core/styles/zIndex";

const styles = theme => ({
  appbar: {
    background: "#282c34",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)"
  },
  navigation: {
    zIndex: "501",
    padding: "0px 50px"
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
  constructor(props) {
    super(props);
    this.state = {
      slideOpen: false
    };
  }

  toggleOpen = () => {
    this.setState({ slideOpen: !this.state.slideOpen });
    this.toggleScroll();
  };

  close = () => {
    this.setState({ slideOpen: false });
    this.toggleScroll();
  };

  toggleScroll = () => {
    //State does not get updated until after this function call so check for !slideOpen
    //When overlay is visible...
    if (!this.state.slideOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.getElementById("dcontent").style.filter = "blur(2px)";
    } else {
      // When the overlay is hidden...
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.getElementById("dcontent").style.filter = "none";
    }
  };

  render() {
    const { classes, children } = this.props;

    return (
      <React.Fragment>
        <HideOnScroll {...this.props}>
          <AppBar className={classes.appbar}>
            <Toolbar className={classes.navigation}>
              <div className="logo">
                <a href="/">
                  <svg>
                    <use xlinkHref={require("../assets/logo.svg") + "#Logo"} />
                    {/* Fallback Here */}
                  </svg>
                </a>
              </div>
              <div style={{ marginLeft: "auto" }} />
              <div className="full-nav">
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
              </div>
              <div className="compressed-nav">
                <MenuButton
                  active={this.state.slideOpen}
                  onToggle={this.toggleOpen}
                ></MenuButton>
              </div>
            </Toolbar>
            <SlideOutMenu
              open={this.state.slideOpen}
              onClose={this.close}
            ></SlideOutMenu>
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
