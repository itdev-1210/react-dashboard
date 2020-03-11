import axios from "axios";
export const GET_RENTER_DATA = "RENTER_GET_DATA";

export const getRenterData = () => dispatch => {
    axios.get("/api/renter/get-renter-list").then(res => {
        dispatch({
            type: GET_RENTER_DATA,
            payload: res.data
        });
    });
}
