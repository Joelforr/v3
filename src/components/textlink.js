import React, { Component } from "react";
import PropTypes from "prop-types";

import "../css/textlink.css";

class TextLink extends React.Component {
  render() {
    return (
      <a
        className="textlink"
        style={{ color: this.props.color }}
        href={this.props.href}
        target="_blank"
      >
        {this.props.children}
        <span style={{ background: this.props.color }} />
      </a>
    );
  }
}

export { TextLink };
