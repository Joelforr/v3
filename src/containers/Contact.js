import React, { Component } from "react";
import PropTypes from "prop-types";

import "../Content.css";
import "../Contact.css";

import { FloodButton } from "../components/floodbutton.js";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Contact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div id="contact" className="section-wrapper-a contact-section">
          <h4 className="h4">Get In Touch</h4>
          <div>
            <p className="message">
              I'm currently looking for new oppertunities, so feel free to
              contact me about potential roles, projects, or even just to say
              hello. I'll do my best to answer your email.
            </p>
          </div>
          <div className="contact-button">
            <FloodButton external="true" href="mailto:joelforr@gmail.com">
              Contact
            </FloodButton>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Contact);
