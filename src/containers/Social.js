import React, { Component } from "react";
import PropTypes from "prop-types";

import "../css/socialcontainer.css";

import { IconButton } from "../components/icons.js";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Social extends Component {
  render() {
    return (
      //Bug: Component does not display when first div is given a class, but
      //inline styles still work
      <div
        className="sc"
        style={{
          position: "fixed",
          width: "40px",
          bottom: "0px",
          left: "40px"
        }}
      >
        <div>
          <ul className="socialItemList">
            <li>
              <IconButton
                size="20px"
                color="#fff"
                icon="icons/github.svg"
                id="#Github"
                href="https://github.com/Joelforr"
              />
            </li>
            <li>
              <IconButton
                size="20px"
                color="#fff"
                icon="icons/linkedin.svg"
                id="#LinkedIn"
                href="https://www.linkedin.com/in/joel-forrester-404839b6/"
              />
            </li>
            <li>
              <IconButton
                size="20px"
                color="#fff"
                icon="icons/instagram.svg"
                id="#Instagram"
                href="https://www.instagram.com/xzero_reborn/"
              />
            </li>
            <li>
              <IconButton
                size="30px"
                color="#fff"
                icon="icons/twitter.svg"
                id="#Twitter"
                href="https://twitter.com/joelforr1"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Social.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Social);
