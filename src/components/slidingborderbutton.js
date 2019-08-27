import React, { Component } from "react";
import PropTypes from "prop-types";

import "../css/slidingborderbutton.css";

import { withStyles } from "@material-ui/core/styles";

class SlidingButton extends React.Component {
  render() {
    return (
      <a className="border-slide" href={this.props.href} target="_blank">
        {this.props.children}
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </a>
    );
  }
}

export default SlidingButton;
