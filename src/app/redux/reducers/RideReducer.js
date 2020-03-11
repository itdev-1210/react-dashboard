import {
  GET_RIDE_DATA,
} from "../actions/RideActions";
  
const initialState = {
  rideData: [],
};
  
const rideReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_RIDE_DATA: {
      return {
        ...state,
        rideData: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
  
export default rideReducer;
  