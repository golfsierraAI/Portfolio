import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./LeftPanel.css";
var LeftPanel = () => {
  var iconClicked = (event) => {};
  return (
    <div className="leftCont">
      <div className="iconsCont">
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://www.instagram.com/golf._.sierra/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://github.com/golfsierraAI"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://www.linkedin.com/in/golfsierra/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://www.hackerrank.com/golf_sierra"
          target="_blank"
        >
          <img
            className="hackerrank"
            src={process.env.PUBLIC_URL + "/HackerRank_logo.svg"}
          />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default LeftPanel;
