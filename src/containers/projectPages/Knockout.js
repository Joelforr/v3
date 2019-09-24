import React, { Component } from "react";
import PropTypes from "prop-types";

import ProjectInfoComponent from "../../components/projectInfo.js";
import { ProjectDesc, ProjectGallery } from "../../components/projectInfo.js";

import projects from "../../data/projects.json";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Knockout extends Component {
  render() {
    return (
      <React.Fragment>
        <ProjectInfoComponent project={projects.featured[0]} />
        <ProjectDesc project={projects.featured[0]} />
        <ProjectGallery project={projects.featured[0]} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Knockout);
