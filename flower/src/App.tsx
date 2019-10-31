import React from "react";
import "./App.css";

import Overview from "./routes/Overview";
import Graph from "./routes/Graph";
import Logs from "./routes/Logs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/graph">
          <Graph />
        </Route>
        <Route path="/logs">
          <Logs />
        </Route>
        <Route path="/">
          <Overview />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
