import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { SET_TIME_FILTER } from '../../constants/actionTypes';

// import { getFeatureCount } from '../../utils';

class TimeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (category) => (event) => {};

  render() {
    const { layers, data } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 1px 4px rgba(0, 0, 0, .3)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          top: 10,
          left: 50,
          bottom: 'auto',
          right: 'auto',
          background: '#fff',
          paddingRight: 10,
          paddingLeft: 10,
          fontSize: 11
        }}
      >
        <Select value="Today" onChange={this.handleChange}>
          <MenuItem value="Today">Today</MenuItem>
          <MenuItem value="This Week">This Week</MenuItem>
          <MenuItem value="This Month">This Month</MenuItem>
        </Select>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeTimeFilter: state.map.activeTimeFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleTimeFilter: (filter) => {
      dispatch({ type: SET_TIME_FILTER, filter });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeFilter);
