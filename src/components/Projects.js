import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
 //   const spotlightProjects = {
  //    "No Man's Land": {
   //     title: "no man's land",
   //     desc:
   //       "A third-person survival-mode game where you battle against time and space to return to Earth.",
    //    techStack: "C# (UNITY)",
   //     link: "https://github.com/slakh96/no-mans-land",
    //    open: "https://gazijarin.itch.io/no-mans-land",
   //     image: "/assets/nomansland.png"
   //   }, 
  //  }; 
    const projects = {
      "Epedemic Halt": {
        desc:
          "A covid 19 tracker and tips on how to prevent them.",
        techStack: "C#, ASP.NET, HTML, CSS",
        link: "https://github.com/jodenrey/EpedemicHalt"
      },
      "Little Garden Learning Center Enrollment System.": {
        desc:
          "A Enrollment System.",
        techStack: "C#",
        link: "https://github.com/jodenrey/LGLC_SYSTEM"

      },
      "MultiGame": {
        desc:
          "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
        techStack: "Java, Android Studio",
        link: "https://github.com/jodenrey/MultiGame",
        open: ""
      },
     
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
       
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
