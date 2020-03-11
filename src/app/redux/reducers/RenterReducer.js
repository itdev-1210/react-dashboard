import {
  GET_RENTER_DATA,
} from "../actions/RenterActions";
  
const initialState = {
  renterData: [],
};
  
const renterReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_RENTER_DATA: {
      return {
        ...state,
        renterData: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
  
export default renterReducer;
  