import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <>
      <Header />

      {/* <div className="mobile_sidebar">
        <Sidebar />
      </div> */}

      <Sidebar device={"desktop_sidebar"} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
