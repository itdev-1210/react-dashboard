import {
  GET_COUPON_DATA,
} from "../actions/CouponActions";
  
const initialState = {
  data: [],
};
  
const couponReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_COUPON_DATA: {
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
  
export default couponReducer;
  