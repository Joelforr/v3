import React, { Component } from "react";
import PropTypes from "prop-types";

import "../Content.css";
import "../About.css";

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
          <Grid container spacing={2}>
            <Grid item xs="6">
              <h3 className="h3">About Me</h3>
            </Grid>
            <Grid container item xs="12" justify="space-between">
              <Grid container item xs="6">
                <Grid item xs="12">
                  <Typography className="b1 bio">
                    Hello! I’m Joel, a software engineer and game designer based
                    in New York City. I work on a wide variety of projects, from
                    games and VR experiences to application and web developmont.
                    <br /> <br />
                    I love all things technology and I’m constantly working to
                    improve my skills and learn new technologies.
                    <br /> <br />
                    Here are a few of my skills:
                  </Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography className="skill">Unity</Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography className="skill">Unreal</Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography className="skill">C#</Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography className="skill">C/C++</Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography className="skill">Java</Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography className="skill">Javascript (ES6)</Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography className="skill">HTML & CSS</Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography className="skill">React</Typography>
                </Grid>
              </Grid>
              <Grid item xs="4">
                <div className="picture-container">
                  <div className="im">
                    <SvgImage
                      src={require("../assets/me.jpg")}
                      sizes="(max-width: 300px) 100vw, 300px"
                    ></SvgImage>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
