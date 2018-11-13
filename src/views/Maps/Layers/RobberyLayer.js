import React from 'react';
import { GeoJSONLayer } from 'react-mapbox-gl';
import { connect } from 'react-redux';

import { FEATURE_CLICKED } from '../../../constants/actionTypes';

class RobberyLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  layerOnMouseEnter = () => {
    this.props.map.getCanvas().style.cursor = 'pointer';
  };
  layerOnMouseLeave = () => {
    this.props.map.getCanvas().style.cursor = '';
  };
  layerOnClick = (e) => {
    const features = this.props.map.queryRenderedFeatures(e.point, {
      layers: ['robbery-layer-circle']
    });
    if (features.length) {
      const feature = features[0];
      const selected = {
        coordinates: feature.geometry.coordinates,
        properties: feature.properties
      };
      this.props.setSelectedFeature(selected);
    }
  };

  render() {
    const { data, visible } = this.props;
    if (visible) {
      return (
        <GeoJSONLayer
          id="robbery-layer"
          data={data}
          circleOnClick={this.layerOnClick}
          circleOnMouseEnter={this.layerOnMouseEnter}
          circleOnMouseLeave={this.layerOnMouseLeave}
          circlePaint={{
            'circle-color': 'green',
            'circle-radius': 20
          }}
          layerOptions={{
            filter: ['==', 'category', 'robbery']
          }}
        />
      );
    }
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    visible: state.map.layers.robbery
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSelectedFeature: (feature) => {
      dispatch({ type: FEATURE_CLICKED, feature });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RobberyLayer);
