import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Svg from "./assets/svg.svg"

const App = () => {
  return (
    <>


      <Svg />
      {/* <Header />
      <Sidebar /> */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
