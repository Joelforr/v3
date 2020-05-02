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
        <ProjectInfoComponent project={projects.featured[2]} />
        <ProjectDesc project={projects.featured[2]} />
        <div className="section-wrapper-a">
          <SectionTitle>Summary of Responsibilities</SectionTitle>
          <SectionBody>
            <p>
              As the sole designer and developer for this project I was
              responsible for the creative direction of the project
            </p>
            <p>
              I devloped a 2D combat systems utalizing state-machines and other
              design principles
            </p>
            <p>
              I built a custom animator within Unity with 2D Hit/Hurtbox
              functionality
            </p>
            <p>I play-tested and tuned new gameplay systems</p>
            <p>
              Collaborated with artists to create illustrations of the games
              world
            </p>
          </SectionBody>
        </div>
        <ProjectGallery project={projects.featured[0]} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Knockout);
