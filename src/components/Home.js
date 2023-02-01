import React from "react";
import { name, city } from "../data/data.js";

const divStyle = {
  color:"firebrick"
}

function Home() {
  // update the JSX being returned!
  return (
    <div>
      <div id="home">
        <h1 style={divStyle}>{name} is a Web Developer from {city}</h1>
      </div>
    </div>
    );
}

export default Home;
