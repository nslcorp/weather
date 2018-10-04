import React, { Component, Fragment } from 'react';
import Link from 'react-router-dom/es/Link';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="ui container two column grid">
            <div className="left column"> Logo</div>
            <div className="right column">
              <Link to="/search">Search</Link>
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
