import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {useDispatch} from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { usePersonStore, PersonStoreProvider } from "personStore/personStore";

const App = () => {
  const {name, age, changeName, changeAge} = usePersonStore();

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
    <App />
  </PersonStoreProvider>,
document.getElementById("app"));
