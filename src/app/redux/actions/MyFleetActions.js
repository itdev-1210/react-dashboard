import axios from "axios";
export const GET_FLEET_DATA = "FLEET_GET_DATA";

export const getFleetData = () => dispatch => {
    axios.get("/api/fleet/get-fleet-list").then(res => {
        dispatch({
            type: GET_FLEET_DATA,
            payload: res.data
        });
    });
}
