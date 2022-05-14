import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HackerRankLogo from "../resources/HackerRank_logo.svg";
import LeetcodeIcon from "../resources/leetcode.svg";
import MediumIcon from "../resources/medium.svg";

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
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://github.com/golfsierraAI"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://www.linkedin.com/in/golfsierra/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://www.hackerrank.com/golf_sierra"
          target="_blank"
          rel="noreferrer"
        >
          <img className="hackerrank" src={HackerRankLogo} />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://leetcode.com/golf_sierra/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="hackerrank" src={LeetcodeIcon} />
        </a>
        <a
          onFocus={iconClicked}
          className="icons"
          href="https://leetcode.com/golf_sierra/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="hackerrank" src={MediumIcon} />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default LeftPanel;
