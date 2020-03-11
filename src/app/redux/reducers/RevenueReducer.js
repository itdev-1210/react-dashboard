import {
  GET_REVENUE_DATA,
} from "../actions/RevenueActions";
  
const initialState = {
  data: [],
};
  
const revenueReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_REVENUE_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
  
export default revenueReducer;
  