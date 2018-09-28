import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Divider, Segment, Header, Container, Grid, Image, Icon } from 'semantic-ui-react';

const style = {
  h1: {
    marginTop: '3em'
  },
  h2: {
    margin: '4em 0em 2em'
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em'
  },
  last: {
    marginBottom: '300px'
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <div className="row justify-content-center">123</div>
          <div className="row">2</div>
          <div className="row">3</div>
        </div>

        <Header as="h3" textAlign="center" style={style.h3} content="Container" />
        <Container>
          <Segment.Group>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
          </Segment.Group>
        </Container>

        <Header as="h3" content="Text Container" style={style.h3} textAlign="center" />
        <Container text>
          <Segment.Group>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
            <Segment>Content</Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
