import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import NavBarComponent from "./components/navbar.js";

import Social from "./containers/Social.js";
import Main from "./containers/Main.js";
import Knockout from "./containers/projectPages/Knockout";
import Pulse from "./containers/projectPages/Pulse";
import ProjectUnreal from "./containers/projectPages/ProjectUnreal";

import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#282c34"
    }
  }
});

const styles = theme => ({
  frame: {
    backgroundColor: "#282c34"
  },
  toolbar: theme.mixins.toolbar,
  body: {
    width: "100%",
    margin: "0 auto",

    "@media only screen and (max-width: 480px)": {
      padding: "0 25px"
    },

    "@media only screen and (min-width: 481px)": {
      padding: "0 50px"
    },

    "@media only screen and (min-width: 769px)": {
      padding: "0 100px"
    },

    "@media only screen and (min-width: 1001px)": {
      padding: "0 150px"
    }
  },
  footer: {}
});

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <BrowserRouter>
            <div className={classes.toolbar}>
              <NavBarComponent />
            </div>
            <Social />
            <div id="dcontent" className={classes.body}>
              <Route exact path="/" component={Main} />
              <Route exact path="/knockout" component={Knockout} />
              <Route exact path="/pulse" component={Pulse} />
              <Route exact path="/projectunreal" component={ProjectUnreal} />
            </div>
            <footer className="section-footer" />
          </BrowserRouter>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
