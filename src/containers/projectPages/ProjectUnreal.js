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
            <h3 style={{marginBottom:"0px"}}>
                First and Third Person Meshes
            </h3>

            <div style={{display:"flex", flexWrap:"wrap"}}>
              <p style={{maxWidth:"500px", width:"50vw", marginRight:"20px"}}>
                Full animated meshes for both first-person and third-person view. In first-person view only the hands are visible. from a third person view full character mesh is visible and animated with aim offsets.
              </p>

              <div style={{flexBasis:"auto", flexGrow:"2"}}>    
                <video autoplay="true" muted="true" loop="true" style={{minWidth:"100%", maxWidth: "100%", maxHeight:"100%"}}
                    source src="https://thumbs.gfycat.com/DirtySpectacularGroundhog-mobile.mp4" type="video/mp4">    
                </video>
              </div>
            </div>

            <br/>

            <h3 style={{marginBottom:"0px"}}>
                Dyanmic Crosshair
            </h3>
            <div style={{display:"flex", flexWrap:"wrap"}}>
              <p style={{}}>
              It's common in FPS games to have your shots become less accurate as you hold fire or move. While the character is moving or "spray firing" the crosshair reticle expands or blooms, visually representing the increase in spread. The two gifs are a comparison of my project and Riot Games FPS title Valorant which features a similar system.
              </p>

              <div style={{flexBasis:"auto", flexGrow:"2"}}>    
                <video autoplay="true" muted="true" loop="true" style={{maxWidth: "90%", maxHeight:"100%"}}
                    source src="https://giant.gfycat.com/UnacceptableInnocentCrownofthornsstarfish.webm" type="video/mp4">
                </video>
              </div>

              <div style={{flexBasis:"auto", flexGrow:"2"}}>    
                 <video autoplay="true" muted="true" loop="true" style={{maxWidth: "90%", maxHeight:"100%"}}
                    source src="https://giant.gfycat.com/HonorableSeveralIndianskimmer.webm" type="video/mp4">
                </video> 
              </div>
            </div>

            
            <br/>
            <h3 style={{marginBottom:"0px"}}>
                Level Design
            </h3>
            <div style={{display:"flex", flexWrap:"wrap"}}>
              <p style={{}}>
              A prototype of a small to medium sized FPS map. Asymetircal map design for a Team Deatch Match game mode. The temple in the center of the map acts as the main point of contention, due to its prime location and high ground. There are also two side routes (short & long) that players can take to get a flank on the enemy.
              </p>

              <div style={{flexBasis:"auto", flexGrow:"2"}}>    
                <video autoplay="true" muted="true" loop="true" style={{maxWidth: "90%", maxHeight:"100%"}}
                    source src="https://thumbs.gfycat.com/DeafeningShorttermIndianspinyloach-mobile.mp4" type="video/mp4">
                </video>
              </div>

            
            </div>

          </SectionBody>
        </div>

      
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProjectUnreal);
