import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider, Segment, Header, Container, Grid, Image, Icon } from 'semantic-ui-react';
import Link from 'react-router-dom/es/Link';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="ui container grid">
            <div className="left floated column"> Logo</div>
            <div className="right floated column">
              <Link to="/search" />
            </div>
          </div>

          <div className="ui segment">
            <div className="row">Header Location</div>
            <div className="row">Header Location</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {};

export default App;
