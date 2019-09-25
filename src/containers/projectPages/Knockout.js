import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../Content.scss";

import ProjectInfoComponent from "../../components/projectInfo.js";
import { SectionTitle, SectionBody } from "../../components/projectInfo.js";
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
        <div className="section-wrapper-a">
          <SectionTitle>Summary of Responsibilities</SectionTitle>
          <SectionBody>
            <p>
              I was the sole designer and developer for this project. I built a
              world and planned and scripted gameplay
            </p>
            <p>
              I built a custom animator within Unity with 2D Hit/Hurtbox
              functionality
            </p>
            <p>I play-tested and tuned new gameplay systems</p>
            <p>
              Collaborated with artists to create illustrations for the building
              of the games world
            </p>
          </SectionBody>
        </div>
        <ProjectGallery project={projects.featured[0]} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Knockout);
