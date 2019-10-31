import React, { FC } from "react";
import "./App.css";

import OverviewRoute from "./routes/OverviewRoute";
import GraphRoute from "./routes/GraphRoute";
import LogsRoute from "./routes/LogsRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/graph">
          <GraphRoute />
        </Route>
        <Route path="/logs">
          <LogsRoute />
        </Route>
        <Route path="/">
          <OverviewRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
