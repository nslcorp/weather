import React from 'react';
import { Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from './reducer';
import { doSearchChange, doFindCityByName } from './actions';

const SearchPage = props => (
  <div>
    <input
      type="text"
      onChange={event => {
        const value = event.target.value;
        props.doSearchChange(value);

        value.length > 1 && props.doFindCityByName(value);
      }}
    />

    {props.results.length && (
      <ul className="list-group">
        {props.results.map(item => (
          <li className="list-group-item">{item.name}</li>
        ))}
      </ul>
    )}
    {/*    <Search
      onResultSelect={aa => console.log('onResultSelect', aa)}
      onSearchChange={}
      results={props.results}
      value={props.value}
      {...props}
    />*/}

    <div className="ui mini horizontal divided list">
      <div className="item">
        <Link to="/forecast?q=dnepr" children="Dnepr" />
      </div>
      <div className="item">
        <Link to="/forecast?q=kiev" children="Kiev" />
      </div>
      <div className="item">
        <Link to="/forecast?q=lvov" children="Lvov" />
      </div>
    </div>
  </div>
);

SearchPage.propTypes = {};

const mapStateToProps = state => ({
  results: selectors.getCities(state),
  value: selectors.getValue(state),
  loading: selectors.getLoading(state)
});
export default connect(
  mapStateToProps,
  { doFindCityByName, doSearchChange }
)(SearchPage);
