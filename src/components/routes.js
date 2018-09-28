import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchExampleStandard from './home-page';
import App from './app';

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Fragment>
);

export default Routes;
