import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Calculator from "./pages/Calculator";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300&display=swap');
  body {
    font-family: 'Assistant', sans-serif;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyles />
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
