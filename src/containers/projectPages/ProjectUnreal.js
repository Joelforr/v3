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

class ProjectUnreal extends Component {
  render() {
    return (
      <React.Fragment>
        <ProjectInfoComponent project={projects.featured[0]} />
        <ProjectDesc project={projects.featured[0]} />
        <div className="section-wrapper-a">
          <SectionTitle>Summary of Responsibilities</SectionTitle>
          <SectionBody>
              <p>
                Programmed gameplay and logic using C++
              </p>
              <p>
                Built up classes for character and weapons to be dynamic, so variables can be edited and tweaked on the fly in the editor
              </p>
              <p>
                  Implemented bullet projectile with accurate crosshairs and bullet spread.
              </p>
              <p>
                  Fully animated character
              </p>
              
          </SectionBody>
        </div>
        
        <div className="section-wrapper-a">       
          <SectionTitle>Dev Corner</SectionTitle>
          <SectionBody>           
            <h3>
                First and Third Person Meshes
            </h3>
            <div>    
                <video autoplay="true" muted="true" loop="true" style={{maxWidth: "60%", maxHeight:"100%"}}
                    source src="https://thumbs.gfycat.com/DirtySpectacularGroundhog-mobile.mp4" type="video/mp4">
                </video>

            </div>
            <p>
                Full animated meshes for both first-person and third-person view. In first-person view only the hands are visible. from a third person view full character mesh is visible and animated with aim offsets
            </p>

            <br/>
            
            <h3>
                Dyanmic Crosshair
            </h3>
            <div>    
                <video autoplay="true" muted="true" loop="true" style={{maxWidth: "60%", maxHeight:"100%"}}
                    source src="https://giant.gfycat.com/UnacceptableInnocentCrownofthornsstarfish.webm" type="video/mp4">
                </video>

                <video autoplay="true" muted="true" loop="true" style={{maxWidth: "90%", maxHeight:"100%"}}
                    source src="https://giant.gfycat.com/HonorableSeveralIndianskimmer.webm" type="video/mp4">
                </video> 
            </div>

            <p>
               It's common in FPS games to have your shots become less accurate as you hold fire or move. The lower gif shows an example of this in Valorant, RIOT Games newest FPS title. The gif above shows my C++ implementation of bullet spread or bloom with a dynamic crosshair.
            </p>      
          </SectionBody>
        </div>

      
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProjectUnreal);
