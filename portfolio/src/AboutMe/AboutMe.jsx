import AOS from "aos";
import { useEffect } from "react";
import "./AboutMe.css";
var AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  var imageSlider = (event) => {
    var [border] = document.getElementsByClassName("myImgBorder");
    border.style.transform = "translate(0.2rem, -0.3rem)";
    border.style.transitionDuration = "0.3s";
  };
  var imageSlideBack = (event) => {
    var [border] = document.getElementsByClassName("myImgBorder");
    border.style.transform = "rotate(0deg)";
  };

  return (
    <div data-aos="fade">
      <div id="aboutMain" className="sectionHeading">
        <h3 className="greenText ">
          <span className="works AboutMeHeading ">About Me</span>
        </h3>
        <div className="AboutMeCont">
          <p className="aboutMetext">
            Hello! My name is Gourav and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            when I decided to take an introductory course in my hometown on web
            development and after that i was addicted to HTML and CSS!
            Fast-forward to today, and I've had the privilege of working at a
            <a
              href="http://startupinc.co.in/"
              target="_blank"
              className="noUnderLine"
            >
              <span className="greenText"> start up</span>
            </a>
            , a
            <a
              href="https://www.highradius.com/"
              target="_blank"
              className="noUnderLine"
            >
              <span className="greenText"> huge corporation</span>
            </a>
            ,and a
            <a
              href="https://github.com/golfsierraAI/News"
              target="_blank"
              className="noUnderLine"
            >
              <span className="greenText"> student-led project</span>
            </a>
            .
          </p>
          <a href="#">
            <img
              className="myImg"
              src={process.env.PUBLIC_URL + "myImg.jpeg"}
            ></img>
          </a>
          <div className="myImgBorder"></div>
          <div
            onMouseEnter={imageSlider}
            onMouseLeave={imageSlideBack}
            className="myImgFilter"
          />
        </div>
        <p className="works techStack">
          Here are a few technologies I've been working with recently:
        </p>

        <ul className="works skillUl">
          <tr>
            <td>
              <li>JavaSript</li>
            </td>
            <td>
              <li>ReactJs</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>ExtJs</li>
            </td>
            <td>
              <li>SpringBoot</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Hibernate</li>
            </td>
            <td>
              <li>NodeJs</li>
            </td>
          </tr>
        </ul>
      </div>
    </div>
  );
};
export default AboutMe;
