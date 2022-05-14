import "./RightPanel.css";
var RightPanel = () => {
  const email = "gsharma774962@gmail.com";
  return (
    <div className="rightCont">
      <a className="email" href={`mailto: ${email}`}>
        <p className="email">gsharma774962@gmail.com</p>
      </a>

      <div className="line"></div>
    </div>
  );
};
export default RightPanel;
