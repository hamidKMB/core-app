import React from "react";

import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const CoreContent = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<div>Hello Home</div>} />
          <Route path="/customer" element={<div>Hello customer</div>} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default CoreContent;
