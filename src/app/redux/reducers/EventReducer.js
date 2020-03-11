import {
  GET_EVENT_DATA,
} from "../actions/EventActions";
  
const initialState = {
  data: [],
};
  
const eventReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT_DATA: {
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
  
export default eventReducer;
  