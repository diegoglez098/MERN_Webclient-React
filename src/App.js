import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";
import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouterWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouterWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;
