import {
    SHOW_FILTER_PANEL,
  } from "../actions/FilterActions";
    
  const initialState = {
    panelOpen: false,
  };
    
  const FilterReducer = function(state = initialState, action) {
    switch (action.type) {
      case SHOW_FILTER_PANEL: {
        return {
          ...state,
          panelOpen: !state.panelOpen
        };
      }
      default: {
        return state;
      }
    }
  };
    
  export default FilterReducer;
    