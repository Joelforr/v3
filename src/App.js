import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import NavBarComponent from "./components/navbar.js";
import Social from "./containers/Social.js";
import Main from "./containers/Main.js";
import Knockout from "./containers/projectPages/Knockout";

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
    padding: "0 150px",

    "@media (max-width: 62.5em)": {
      padding: "0 100px"
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
            <div className={classes.body}>
              <Route exact path="/" component={Main} />
              <Route exact path="/knockout" component={Knockout} />
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
