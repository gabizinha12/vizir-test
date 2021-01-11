import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Calculator from "./pages/Calculator";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
