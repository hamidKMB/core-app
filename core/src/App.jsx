import React, { useEffect } from "react";
import ReactDOM from "react-dom";

<<<<<<< HEAD
import { BrowserRouter, Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
>>>>>>> 2daa4d6119420ed4e228b4922cb44b2e09ae0615

import CoreContent from "./CoreContent";

const App = () => <CoreContent />;

<<<<<<< HEAD
  const nameChangeHandler = e => {
    changeName(`${e.target.value}`)
  }

  const ageChangeHandler = e => {
    changeAge(e.target.value)
  }

  return (
    <>
      <Header />
      <Sidebar />

      <div className="content">
        <span className="d-block">
          {`Hello ${name}, You're ${age} years old, cool !`}
        </span>
        <input type="text" placeholder="name" onChange={nameChangeHandler}/>
        <input type="text" placeholder="age" onChange={ageChangeHandler}/>
      </div>
    </>
  )
}

ReactDOM.render(
  <PersonStoreProvider>
    <Router>
      <App />
    </Router>
  </PersonStoreProvider>,
document.getElementById("app"));
=======
ReactDOM.render(<App />, document.getElementById("app"));
>>>>>>> 2daa4d6119420ed4e228b4922cb44b2e09ae0615
