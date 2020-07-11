import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <CssBaseline></CssBaseline>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/projects">
            <Projects></Projects>
          </Route>
          <Route exact path="/contact"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
