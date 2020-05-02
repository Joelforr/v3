import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../Content.scss";
import "../../projectinfo.css";
import { SvgImage } from "../../components/svgImg.js";

import ProjectInfoComponent from "../../components/projectInfo.js";
import { SectionTitle, SectionBody } from "../../components/projectInfo.js";
import { ProjectDesc, ProjectGallery } from "../../components/projectInfo.js";

import projects from "../../data/projects.json";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Pulse extends Component {
  render() {
    return (
      <React.Fragment>
        <ProjectInfoComponent project={projects.projects[0]} />
        <ProjectDesc project={projects.projects[0]} />
        <div className="section-wrapper-a">
          <SectionTitle>Summary of Responsibilities</SectionTitle>
          <SectionBody>
            <p>
              Wrote scripts to calculate and process information from audio
              files
            </p>
            <p>
              To improve the feel of the projectiles spawn rate and location, I
              wrote an external track file which determined the location,
              number, and patterns of the projectiles for each beat of the song.
            </p>
            <p>
              In my first attempt to learn shader programming I wrote a shader
              to emit the pulse effect and reveal the camoflouged projectiles
            </p>
          </SectionBody>
        </div>

        {/* Gallery Section */}
        <div className="section-wrapper-a">
          <div className="section-title">Gallery</div>
          <div className="g-grid">
            <div className="g-grid-item">
              <SvgImage
                src={require("../../assets/pulse/pulse_2.png")}
                sizes="(max-width: 300px) 100vw, 300px"
              ></SvgImage>
            </div>
            <div className="g-grid-item2">
              <SvgImage
                src={require("../../assets/pulse/pulse_3.png")}
                sizes="(max-width: 300px) 100vw, 300px"
              ></SvgImage>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Pulse);
