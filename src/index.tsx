import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import BusinessHours from "./components/BusinessHours";
import Locations from "./components/Locations";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Locations} />
      <Route path="/:id" component={BusinessHours} />
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App content={routing} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
