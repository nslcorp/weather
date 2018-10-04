import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doGetForecast } from './actions';

class Forecast extends Component {
  componentDidMount() {
    //this.props.doGetForcast();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Forecast</h3>
      </div>
    );
  }
}

Forecast.propTypes = {};

export default connect(
  null,
  { doGetForecast }
)(Forecast);
