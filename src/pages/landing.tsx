import React from "react";
import Enterence from "../containers/Enterence";
import Header from "../containers/Header";
// import Header from "../containers/Header2";

import Info from "../containers/Info";
import Team from "../containers/Team";
import Roadmap from "../containers/Roadmap";
import Collection from "../containers/Collection";

function Landing() {
  return (
    <div className="">
      <Header />
      <Enterence />
      <Info />
      <Collection />
      <Roadmap />
      <Team />
    </div>
  );
}

export default Landing;
