import React, { FC } from "react";
import "./App.css";

import OverviewRoute from "./routes/OverviewRoute";
import GraphRoute from "./routes/GraphRoute";
import LogsRoute from "./routes/LogsRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UiProvider, uiInitialState, uiReducer } from "./contexts/ui";

const App: FC = () => {
  return (
    <UiProvider initialState={uiInitialState} reducer={uiReducer}>
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
    </UiProvider>
  );
};

export default App;
