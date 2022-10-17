import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./scss/main.scss";

const App = () => {
  return (
    <>

      <p className="test">
        hello world
      </p>
      
      {/* <Header />
      <Sidebar /> */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
