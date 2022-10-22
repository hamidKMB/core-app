import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { PersonStoreProvider } from "personStore/personStore";
import { BrowserRouter } from "react-router-dom";

import CoreContent from "./CoreContent";

ReactDOM.render(
  <BrowserRouter>
    <PersonStoreProvider>
      <CoreContent />
    </PersonStoreProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
