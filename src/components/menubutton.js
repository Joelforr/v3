import React, { Component } from "react";

import "../css/hamburgermenubutton.css";

class MenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onToggle();
  }

  render() {
    return (
      <div
        onClick={this.onClick}
        className={
          this.props.active ? "hamburger-icon active" : " hamburger-icon"
        }
      >
        <div className="hamburger"></div>
      </div>
    );
  }
}

export { MenuButton };
