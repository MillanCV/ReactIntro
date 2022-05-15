import ReactDOM from "react-dom";
import SearchParams from "./SearchParams.js";
import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <h1>Adopt Me!</h1>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
