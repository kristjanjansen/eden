import React from "react";
import "./App.css";
import Logs from "./routes/Logs";
import Layout from "./containers/Layout";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Logs />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
