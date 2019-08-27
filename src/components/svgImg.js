import React, { Component } from "react";
import PropTypes from "prop-types";

class SvgImage extends React.Component {
  render() {
    return (
      <picture>
        <img
          srcset={this.props.src}
          sizes={this.props.sizes}
          alt
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            opacity: 1,
            transition: "opacity 500ms ease 0s",
            verticalAlign: "middle"
          }}
        />
      </picture>
    );
  }
}

export { SvgImage };
