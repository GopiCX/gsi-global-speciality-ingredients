import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AsyncRoute from './AsyncRoute';
import Layout from '../Layout/Layout';
import InnerRoutes from './InnerRoutes';

class Routes extends React.Component {
  render() {
    return (
      <Router  basename={process.env.REACT_APP_BASENAME || "/"}>
        <Switch>
          <Route path="/" component={InnerRoutes} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
