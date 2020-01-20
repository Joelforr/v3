import React, { Component } from "react";
import PropTypes from "prop-types";

import "../Content.scss";
import "../Projects.css";

import data from "../data/projects.json";

import { IconButton } from "../components/icons.js";
import { FloodButton } from "../components/floodbutton.js";
import { SvgImage } from "../components/svgImg.js";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div id="projects" className="section-wrapper-a">
          <h3 className="h3">Projects</h3>
          {data.featured.map((featured, index) => (
            <div className="featured-project">
              <div
                className={
                  index % 2 == 0 ? "featured-content-r" : "featured-content-l"
                }
              >
                <div className="featured-label">Featured Project</div>
                <div className="featured-title">{featured.title}</div>
                <div className="featured-description">
                  <p>{featured.desc.short}</p>
                </div>
                <ul
                  className={
                    index % 2 == 0 ? "featured-tags-r" : "featured-tags-l"
                  }
                >
                  {featured.tags.map(tag => (
                    <li>{tag}</li>
                  ))}
                </ul>
                <div
                  className={
                    index % 2 == 0 ? "featured-links-r" : "featured-links-l"
                  }
                >
                  {index % 2 == 0 && featured.page && (
                    <div style={{ paddingRight: "16px" }}>
                      <FloodButton
                        disabled={featured.page == "/"}
                        href={featured.page}
                      >
                        Learn More
                      </FloodButton>
                    </div>
                  )}

                  {featured.links.map(link => (
                    <span
                      style={{
                        alignSelf: "center",
                        paddingRight: "8px",
                        paddingLeft: "8px"
                      }}
                    >
                      <IconButton
                        icon={link.icon}
                        id={link.id}
                        href={link.url}
                      />
                    </span>
                  ))}

                  {index % 2 != 0 && featured.page && (
                    <div style={{ paddingLeft: "16px" }}>
                      <FloodButton
                        disabled={featured.page == "/"}
                        href={featured.page}
                      >
                        Learn More
                      </FloodButton>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={index % 2 == 0 ? "featured-img-l" : "featured-img-r"}
              >
                <div className="featured-img-src">
                  <SvgImage
                    src={require("../assets/" + featured.thumbnail)}
                    sizes="(max-width: 700px) 100vw, 700px"
                  ></SvgImage>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Non-featured Projects */}
        <div className="section-wrapper-a">
          <div className="projects-h1">Projects</div>
          <div className="projects-wrapper">
            <div className="project-grid">
              {data.projects.map(project => (
                <div className="project-outer">
                  <div className="project-inner">
                    <header>
                      <div className="project-header">
                        <div className="project-type">
                          <svg>
                            <use
                              xlinkHref={
                                require("../assets/icons/console.svg") +
                                "#Controller"
                              }
                            />
                            {/* Fallback Here */}
                          </svg>
                        </div>
                        <div className="project-links">
                          {project.links.map(link => (
                            <span>
                              <IconButton
                                icon={link.icon}
                                id={link.id}
                                href={link.url}
                              />
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="project-name">{project.title}</div>
                      <div className="project-description">
                        <p>{project.desc.short}</p>
                      </div>
                    </header>
                    <footer>
                      <div>
                        {/*Disabled learn more button until completion of descriptor pages */}
                        {/*<FloodButton href="/knockout">Learn More</FloodButton>*/}
                        {project.page && (
                          <FloodButton href={project.page}>
                            Learn More
                          </FloodButton>
                        )}
                      </div>
                      <ul className="project-tags">
                        {project.tags.map(tag => (
                          <li>{tag}</li>
                        ))}
                      </ul>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Projects);
