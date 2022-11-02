import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import CoreContent from "./CoreContent";

const App = () => <CoreContent />;

ReactDOM.render(<App />, document.getElementById("app"));