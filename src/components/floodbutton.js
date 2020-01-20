import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

import "../css/floodbutton.css";

class FloodButton extends React.Component {
  render() {
    return this.props.external ? (
      <div>
        <a href={this.props.href}>
          <button
            className={this.props.disabled ? "disabled" : "flood-button"}
            type="button"
            disabled={this.props.disabled}
          >
            <span>{this.props.children}</span>
          </button>
        </a>
      </div>
    ) : (
      <Link smooth to={this.props.href}>
        <button
          className={this.props.disabled ? "disabled" : "flood-button"}
          disabled={true}
          type="button"
          disabled={this.props.disabled}
        >
          <span>{this.props.children}</span>
        </button>
      </Link>
    );
  }
}

export { FloodButton };
