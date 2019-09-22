import React, { Component } from "react";
import PropTypes from "prop-types";

import "../Content.scss";
import "../projectinfo.css";

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
            <div className="thumbnail-container">Thumbnail</div>
            <div className="info-container">
              {Object.keys(project.info).map(key => (
                <div className="info">
                  {key.replace("-", " ")}: {project.info[key].join(", ")}
                </div>
              ))}
              <div className="info">Tools: {project.tags.join(", ")}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class ProjectDesc extends Component {
  render() {
    const { project } = this.props;
    return (
      <React.Fragment>
        <div className="section-wrapper-b">
          <div className="section-title">What Is {project.title}?</div>
          <div className="desc">{project.desc.short}</div>
        </div>
      </React.Fragment>
    );
  }
}

export { ProjectDesc };
export default withStyles(styles)(ProjectInfoComponent);
