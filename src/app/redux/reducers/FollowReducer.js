import {
    GET_FOLLOW_DATA,
  } from "../actions/FollowActions";
    
  const initialState = {
    follow_users: [],
  };
    
  const followReducer = function(state = initialState, action) {
    switch (action.type) {
      case GET_FOLLOW_DATA: {
        return {
          ...state,
          follow_users: action.payload
        };
      }
      default: {
        return state;
      }
    }
  };
    
  export default followReducer;
    