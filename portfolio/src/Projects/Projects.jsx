import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./Project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import GithubBG from "../resources/github.jpg";
import data from "./Projects.json";
let Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  var imageSlider = (event) => {
    console.log("Hello");
  };
  var noGit = () => {
    alert("Not an open source project ");
  };
  console.log(data);
  return (
    <div id="projectMain" className="sectionHeading">
      <h1 className="works AboutMeHeading WorkHeading">
        Some Things I've Built
      </h1>
      <div data-aos="fade">
        {data.map((element) => {
          return (
            <div
              className={
                element.key % 2 === 0 ? "Projectcard1" : "Projectcard2"
              }
            >
              <div
                onMouseEnter={imageSlider}
                className="scraperImage"
                src={GithubBG}
              />
              <div
                className={
                  element.key % 2 === 0
                    ? "ProjectDescBlock1"
                    : "ProjectDescBlock2"
                }
              >
                <p className="greenText FeaturedProjects">Featured Project</p>
                <h2 className="ProjectName">
                  <b>{element.name}</b>
                </h2>
                <div className="ProjectDesc">
                  <p className="descproject">{element.desc}</p>
                </div>
                <p className="FrameWorks">{element.stack}</p>
                <a
                  href="https://github.com/golfsierraAI/ScrapeDsaToSheet"
                  target="_blank"
                  className="icons"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
              <div
                className={
                  element.key % 2 === 0
                    ? "ProjectImageCover1"
                    : "ProjectImageCover2"
                }
                onMouseEnter={imageSlider}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
