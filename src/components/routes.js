import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './app';
import Search from './search';
import Forecast from './forecast';

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/forecast" component={Forecast} />
    </Switch>
  </Fragment>
);

export default Routes;
