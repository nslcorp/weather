import _ from 'lodash';
import faker from 'faker';
import React, { Component } from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { doGetCities } from './actions';
import { getCities } from './reducer';

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$')
}));

class SearchExampleStandard extends Component {
  state = {
    isLoading: false,
    value: ''
  };

  handleResultSelect = (e, { result }) => console.log(result);

  handleSearchChange = (e, { value }) => {
    this.setState({ value });

    this.props.doGetCities(value);

    /*    setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);*/
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
        results={this.props.cities}
        value={value}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  cities: getCities(state)
});
export default connect(
  mapStateToProps,
  { doGetCities }
)(SearchExampleStandard);
