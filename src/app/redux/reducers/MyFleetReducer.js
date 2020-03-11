import {
  GET_FLEET_DATA,
} from "../actions/MyFleetActions";
  
const initialState = {
  all_fleets: [],
};
  
const myFleetReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_FLEET_DATA: {
      return {
        ...state,
        all_fleets: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
  
export default myFleetReducer;
  