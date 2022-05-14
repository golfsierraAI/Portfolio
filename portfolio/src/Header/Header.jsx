import "./Header.css";
import Resume from "../resources/Resume.pdf";
import Logo from "../resources/logo.png";
var Header = () => {
  var reload = () => {
    window.location.reload();
  };
  var ScrollToAbout = () => {
    var about = document.getElementById("aboutMain");
    console.log(about);
    about.scrollIntoView();
  };
  var ScrollToExperience = () => {
    var about = document.getElementById("workMain");
    console.log(about);
    about.scrollIntoView();
  };
  var ScrollToWork = () => {
    var about = document.getElementById("projectMain");
    console.log(about);
    about.scrollIntoView();
  };
  var ScrollToContactMe = () => {
    var about = document.getElementById("GetInTouchMain");
    console.log(about);
    about.scrollIntoView();
  };
  return (
    <div className="Header">
      <div className="logoContainer">
        <img onClick={reload} className="logo" src={Logo} />
      </div>
      <div className="linkContainer">
        <a onClick={ScrollToAbout} className="headerLinks">
          <p className="headerLinks">About</p>
        </a>
        <a className="headerLinks" onClick={ScrollToExperience}>
          <p className="headerLinks">Experience</p>
        </a>
        <a className="headerLinks" onClick={ScrollToWork}>
          <p className="headerLinks">Work</p>
        </a>
        <a className="headerLinks" onClick={ScrollToContactMe}>
          <p className="headerLinks">Contact</p>
        </a>
        <a href={Resume} target="_blank">
          <button className="resume">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
