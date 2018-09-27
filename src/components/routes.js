import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
