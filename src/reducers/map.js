import {
  FEATURE_CLICKED,
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAIL,
  LAYER_SWITCH,
  SET_TIME_FILTER
} from '../constants/actionTypes';
import data from '../data';

const defaultState = {
  data: { type: 'FeatureCollection', features: [] },
  layers: {
    corruption: true,
    burglary: true,
    robbery: true,
    vandalism: true,
    drugUse: true
  },
  activeTimeFilter: 'today'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FEATURE_CLICKED:
      return {
        ...state,
        clickedFeature: action.feature ? action.feature : null
      };

    case DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case LAYER_SWITCH:
      return {
        ...state,
        layers: {
          ...state.layers,
          [action.key]: action.value
        }
      };
    case SET_TIME_FILTER:
      return {
        ...state,
        activeTimeFilter: action.filter
      };

    default:
      return state;
  }
};
