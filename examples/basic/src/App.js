import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const log = console.log;
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link
            to="/"
            innerRef={function(node) {
              console.log(node);
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Redirect exact from="/" to="/about" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </div>
  </Router>
);

const Home = ({ match, location, history }) => {
  log("match", match);
  log("location", location);
  log("history", history);
  // setTimeout(function() {
  //   history.go(0)
  // }, 100)
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match, location, history }) => {
  log("match", match);
  log("location", location);
  log("history", history);
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
};

export default BasicExample;
