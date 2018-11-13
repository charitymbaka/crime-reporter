import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { LAYER_SWITCH } from '../../constants/actionTypes';

import { getFeatureCount } from '../../utils';

class LayerSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (category) => (event) => {
    this.props.handleLayerSwitch(category, event.target.checked);
  };

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
          borderRadius: 5,
          top: 10,
          right: 10,
          bottom: 'auto',
          left: 'auto',
          background: '#fff',
          fontSize: 11
        }}
      >
        <Card>
          <CardContent
            style={{ display: 'flex', flexDirection: 'column', padding: 10 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  style={{ height: 34 }}
                  checked={layers['corruption']}
                  onChange={this.handleChange('corruption')}
                  value="corruption"
                  color="primary"
                />
              }
              label={`Corruption (${getFeatureCount(data, 'corruption')})`}
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ height: 34 }}
                  checked={layers['burglary']}
                  onChange={this.handleChange('burglary')}
                  value="burglary"
                  color="primary"
                />
              }
              label={`Burglary (${getFeatureCount(data, 'burglary')})`}
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ height: 34 }}
                  checked={layers['robbery']}
                  onChange={this.handleChange('robbery')}
                  value="robbery"
                  color="primary"
                />
              }
              label={`Robbery (${getFeatureCount(data, 'robbery')})`}
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ height: 34 }}
                  checked={layers['vandalism']}
                  onChange={this.handleChange('vandalism')}
                  value="vandalism"
                  color="primary"
                />
              }
              label={`Vandalism (${getFeatureCount(data, 'vandalism')})`}
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ height: 34 }}
                  checked={layers['drugUse']}
                  onChange={this.handleChange('drugUse')}
                  value="drugUse"
                  color="primary"
                />
              }
              label={`Drug Use (${getFeatureCount(data, 'drugUse')})`}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    layers: state.map.layers,
    data: state.map.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLayerSwitch: (key, value) => {
      dispatch({ type: LAYER_SWITCH, key, value });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayerSwitcher);
