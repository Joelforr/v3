import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

import "../css/slideupbutton.css";

class SlideUpNav extends React.Component {
  render() {
    return <ul className="slideup-nav">{this.props.children}</ul>;
  }
}

class SlideUpNavItem extends React.Component {
  render() {
    return this.props.external ? (
      <li>
        <a href="index.html#About">
          <span>{this.props.children}</span>
          <span style={{ color: this.props.color }}>{this.props.children}</span>
        </a>
      </li>
    ) : (
      <li>
        <Link smooth to={this.props.target}>
          <span>{this.props.children}</span>
          <span style={{ color: this.props.color }}>{this.props.children}</span>
        </Link>
      </li>
    );
  }
}

export { SlideUpNav, SlideUpNavItem };
