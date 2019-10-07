import React, { Component } from "react";
import PropTypes from "prop-types";

import "../Content.scss";
import "../projectinfo.css";

import { IconButton } from "../components/icons.js";
import { SvgImage } from "../components/svgImg.js";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class ProjectInfoComponent extends Component {
  render() {
    const { project } = this.props;
    return (
      <React.Fragment>
        <div className="section-wrapper-a">
          <div className="header">
            <h3 className="h3">{project.title}</h3>
          </div>
          <div className="grid-container">
            <div className="thumbnail-container">
              <SvgImage
                src={require("../assets/" + project.thumbnail)}
                sizes="(max-width: 700px) 100vw, 700px"
              ></SvgImage>
            </div>
            <div className="info-container">
              {Object.keys(project.info).map(key => (
                <div className="info">
                  {key.replace("-", " ")}: {project.info[key].join(", ")}
                </div>
              ))}
              <div className="info">Tools: {project.tags.join(", ")}</div>
              <div className="ext-link-container">
                {project.links.map(link => (
                  <span>
                    <IconButton icon={link.icon} id={link.id} href={link.url} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class SectionTitle extends Component {
  render() {
    return <div className="section-title">{this.props.children}</div>;
  }
}

class SectionBody extends Component {
  render() {
    return <div className="desc">{this.props.children}</div>;
  }
}

class ProjectDesc extends Component {
  render() {
    const { project } = this.props;
    return (
      <React.Fragment>
        <div className="section-wrapper-b">
          <div className="section-title">What Is {project.title}?</div>
          <div>
            <p className="desc">{project.desc.full}</p>
            <p className="desc additional">{project.desc.additional}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class ProjectGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }

  render() {
    const { project } = this.props;
    return (
      <React.Fragment>
        <div className="section-wrapper-a">
          <div className="section-title">Gallery</div>
          <div className="im">
            <SvgImage
              src={require("../assets/test-img.png")}
              sizes="(max-width: 300px) 100vw, 300px"
            ></SvgImage>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { SectionTitle, SectionBody, ProjectDesc, ProjectGallery };
export default withStyles(styles)(ProjectInfoComponent);
