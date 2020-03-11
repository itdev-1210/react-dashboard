import {
  GET_INVENTORY_DATA,
} from "../actions/InventoryActions";
  
const initialState = {
  all_inventories: [],
};
  
const inventoryReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_INVENTORY_DATA: {
      return {
        ...state,
        all_inventories: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
  
export default inventoryReducer;
  