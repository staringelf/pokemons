import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Link to="/">
          <h1 id="my-brand">Remember Us..</h1>
        </Link>
        <Switch>
          <Route path="/details/:name">
            <Details />
          </Route>
          <Route path="/">
            < SearchParams/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<StrictMode> <App /> </StrictMode>, document.getElementById("root"));
