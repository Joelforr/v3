import React, { Component } from "react";
import PropTypes from "prop-types";

import "../Content.scss";
import "../About.scss";

import { SvgImage } from "../components/svgImg.js";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div id="about" className="section-wrapper-a">
          <h3 className="h3">About Me</h3>
          <div className="flex-wrapper">
            <div className="left-flex">
              <div className="b1 bio">
                <p>
                  Hello! I’m Joel, a software engineer and game designer based
                  in New York City. I work on a wide variety of projects, from
                  games and VR experiences to application and web developmont.
                </p>
                <p>
                  I love all things technology and I’m constantly working to
                  improve my skills and learn new technologies.
                </p>
                <p>Here are a few of my skills:</p>
              </div>

              <ul
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,minmax(140px,200px))",
                  marginTop: "20px",
                  listStyle: "none",
                  padding: "0px"
                }}
              >
                <li className="skill">Unity</li>
                <li className="skill">Unreal</li>
                <li className="skill">C#</li>
                <li className="skill">C/C++</li>
                <li className="skill">Java</li>
                <li className="skill">Javascript (ES6)</li>
                <li className="skill">HTML5 & CSS3</li>
                <li className="skill">React</li>
              </ul>
            </div>

            <div className="picture-container">
              <div className="im">
                <SvgImage
                  src={require("../assets/me.jpg")}
                  sizes="(max-width: 300px) 100vw, 300px"
                ></SvgImage>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
