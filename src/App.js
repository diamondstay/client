import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import routes from "./routes/index";

function App() {
  return (
    <Router>
      <Menu />
      <div className="container-fluid">{showContent(routes)}</div>
    </Router>
  );
}
function showContent(routes) {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.content}
        />
      );
    });
  }

  return <Switch>{result}</Switch>;
}

export default App;
