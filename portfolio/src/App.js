import ReactLoading from "react-loading";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import "./App.css";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import AboutMe from "./AboutMe/AboutMe";
import Org from "./Organisations/Org";
import Projects from "./Projects/Projects";
import GetInTouch from "./GetInTouch/GetInTouch";
import { useEffect, useState } from "react";

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div>
          <Header />
          <Intro />
          <LeftPanel />
          <RightPanel />
          <div className="mainContainer">
            <AboutMe />
            <Org />
            <Projects />
            <GetInTouch />
          </div>
        </div>
      ) : (
        <div className="loader">
          <ReactLoading type={"bars"} color={"aquamarine"} width={100} />
        </div>
      )}
    </div>
  );
}

export default App;
