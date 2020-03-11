import {
  GET_PEOPLE_DATA,
} from "../actions/PeopleActions";
  
const initialState = {
  all_users: [],
};
  
const peopleReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_PEOPLE_DATA: {
      return {
        ...state,
        all_users: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
  
export default peopleReducer;
  