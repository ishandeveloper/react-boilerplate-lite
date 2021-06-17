import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import { HomeWrapper, AboutWrapper, ContactWrapper } from "./pages";

// Styling
import "./main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeWrapper} />
        <Route exact path="/contact" component={ContactWrapper} />
        <Route exact path="/about" component={AboutWrapper} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
