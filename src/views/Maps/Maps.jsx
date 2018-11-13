import React from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import bbox from '@turf/bbox';

import {
  CorruptionLayer,
  BurglaryLayer,
  VandalismLayer,
  DrugUseLayer,
  RobberyLayer
} from './Layers';
import Popup from '../Maps/Popup';
import LayerSwitcher from './LayerSwitcher';
import TimeFilter from './TimeFilter';
import { FEATURE_CLICKED, DATA_REQUEST } from '../../constants/actionTypes';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZXJpY2tvdGVueW8iLCJhIjoiY2owYXlsb2kxMDAwcjJxcDk3a2Q0MmdpZSJ9.GJQzHfNMElZ7OhW_HbnaXw'
});

class SamaritanMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapReady: false
    };
  }
  componentDidMount() {
    this.props.fetchData();
  }

  onStyleLoad = (c) => {
    this.map = c;
    this.setState({ mapReady: true });
  };
  onMapClick = () => {
    this.props.clearPopup();
  };

  render() {
    const { mapReady } = this.state;
    const { data } = this.props;
    if (data.features.length) {
      const extents = bbox(data);
      return (
        <Map
          // eslint-disable-next-line
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '100vh'
          }}
          onStyleLoad={this.onStyleLoad}
          onClick={this.onMapClick}
          fitBounds={[[extents[0], extents[1]], [extents[2], extents[3]]]}
          fitBoundsOptions={{ padding: 60 }}
        >
          {mapReady && <CorruptionLayer data={data} map={this.map} />}
          {mapReady && <BurglaryLayer data={data} map={this.map} />}
          {mapReady && <DrugUseLayer data={data} map={this.map} />}
          {mapReady && <RobberyLayer data={data} map={this.map} />}
          {mapReady && <VandalismLayer data={data} map={this.map} />}
          <LayerSwitcher />
          <Popup />
          <TimeFilter />
          <ZoomControl position="top-left" />
        </Map>
      );
    }
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.map.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearPopup: () => {
      dispatch({ type: FEATURE_CLICKED });
    },
    fetchData: () => {
      dispatch({ type: DATA_REQUEST });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SamaritanMap);
