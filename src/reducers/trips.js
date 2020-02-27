import { TRIP_TYPE } from '@constType';
import get from 'lodash/get';

export const initialState = {
  trips: [],
  error: null,
  loading: false
  // success: false
};

export default function trips(state = initialState, action) {
  switch (action.type) {
    case TRIP_TYPE.GET_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case TRIP_TYPE.GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        trips: get(action.payload, 'trips')
      };
    case TRIP_TYPE.GET_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        trips: get(action.payload, 'data.trips')
      };
    default:
      return state;
  }
}
