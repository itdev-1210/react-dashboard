import axios from "axios";
export const GET_RIDE_DATA = "RIDE_GET_DATA";

export const getRideData = () => dispatch => {
    axios.get("/api/ride/get-ride-list").then(res => {
        dispatch({
            type: GET_RIDE_DATA,
            payload: res.data
        });
    });
}
