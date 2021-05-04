import "./Footer.css";
var Footer = () => {
  var color = () => {
    var [icon] = document.getElementsByClassName("MergeIcon");
    icon.style.filter = "grayscale(0%)";
  };
  var decolor = () => {
    var [icon] = document.getElementsByClassName("MergeIcon");
    icon.style.filter = "grayscale(100%)";
  };
  return (
    <div
      onMouseLeave={decolor}
      onMouseEnter={color}
      className="Footer FooterText"
    >
      <a
        className="noUnderLine"
        href="https://github.com/golfsierraAI/Portfolio"
        target="_blank"
      >
        <p className="FooterText bottomlink">
          Designed by Brittany Chiang and Built by Gourav Sharma
        </p>
        <img className="MergeIcon" src={process.env.PUBLIC_URL + "merge.svg"} />
      </a>
    </div>
  );
};
export default Footer;
