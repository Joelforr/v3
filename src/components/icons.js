import React, { Component } from "react";

import "../css/iconbutton.css";

class IconButton extends React.Component {
  render() {
    return (
      <div
        className="link"
        style={{
          width: this.props.size,
          height: this.props.size
        }}
      >
        <a href={this.props.href} target="_blank">
          <svg>
            <use
              xlinkHref={
                require("../assets/icons/" + this.props.icon) + this.props.id
              }
            />
            {/* Fallback Here */}
          </svg>
        </a>
      </div>
    );
  }
}

export { IconButton };
