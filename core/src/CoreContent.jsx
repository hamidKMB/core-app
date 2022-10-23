import React, { useState, useEffect } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { PersonStoreProvider } from "personStore/personStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import AuthPage from "authPage/AuthPage";

const Routing = () => {
  const checkAuth = localStorage.getItem("isLoggedIn");

  let navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    setIsLoggedIn(checkAuth === "true");

    if (checkAuth === "true") navigate("/");
  }, [checkAuth]);

  useEffect(() => {
    if (isLoggedIn === null && checkAuth === null) {
      setTimeout(() => {
        setIsLoggedIn(false);
      }, 2000);
    }
  }, [isLoggedIn]);

  if (isLoggedIn === null) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  if (isLoggedIn) {
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
  }

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    );
  }
};

const CoreContent = () => {
  return (
    <BrowserRouter>
      <PersonStoreProvider>
        <Routing />
      </PersonStoreProvider>
    </BrowserRouter>
  );
};

export default CoreContent;
