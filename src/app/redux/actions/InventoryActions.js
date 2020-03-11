import axios from "axios";
export const GET_INVENTORY_DATA = "INVENTORY_GET_DATA";

export const getInventoryData = () => dispatch => {
    axios.get("/api/inventory/get-inventory-list").then(res => {
        dispatch({
            type: GET_INVENTORY_DATA,
            payload: res.data
        });
    });
}
