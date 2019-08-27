import React, { Component } from "react";
import PropTypes from "prop-types";

import "../Content.css";
import "../Experience.css";

import data from "../data/workHistory.json";

import { TextLink } from "../components/textlink.js";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({});

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  setIndex = index => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div id="experience" className="section-wrapper-b">
          <Grid container spacing={2}>
            <Grid item xs="10">
              <h3 className="h3">Where I've Worked</h3>
            </Grid>
            <Grid container item direction="column" xs="12">
              <Grid container item xs="2">
                {data.map((data, index) => (
                  <Grid item xs="12">
                    <button
                      className="button-employer"
                      onClick={() => {
                        this.setIndex(index);
                      }}
                    >
                      {data.employer}
                    </button>
                  </Grid>
                ))}
              </Grid>
              <Grid container item xs="10">
                <div className="wrapper-description">
                  <Grid item xs="12">
                    <div className="title">
                      <span>{data[this.state.activeIndex].role}</span>
                      <span style={{ color: "#efb45f" }}> @ </span>
                      <TextLink
                        color="#efb45f"
                        href={data[this.state.activeIndex].url}
                      >
                        {data[this.state.activeIndex].employer}
                      </TextLink>
                    </div>
                  </Grid>
                  <Grid item xs="12">
                    <div className="timeline">
                      <span>
                        {data[this.state.activeIndex].date.start} {" - "}
                        {data[this.state.activeIndex].date.end}
                      </span>
                    </div>
                  </Grid>
                  {data[this.state.activeIndex].desc.map(bullet => (
                    <Grid item xs="12">
                      <div className="bullet">{bullet}</div>
                    </Grid>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Experience);
