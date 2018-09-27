import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchExampleStandard from './home-page';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SearchExampleStandard} />
  </Switch>
);

export default Routes;
