import React from 'react';
import { Popup, Feature } from 'react-mapbox-gl';
import { connect } from 'react-redux';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const FeaturePopup = ({ feature }) => {
  if (feature) {
    let time = distanceInWordsToNow(new Date(feature.properties.timestamp));
    return (
      <Popup coordinates={feature.coordinates}>
        <h5>{feature.properties.desc}</h5>
        <p>
          <strong>{time} ago</strong>
        </p>
      </Popup>
    );
  }
  return null;
};

const mapStateToProps = (state, ownProps) => {
  return {
    feature: state.map.clickedFeature
  };
};

export default connect(mapStateToProps)(FeaturePopup);
