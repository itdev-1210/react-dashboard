import axios from "axios";
export const GET_REVENUE_DATA = "REVENUE_GET_DATA";

export const getRevenueData = () => dispatch => {
    axios.get("/api/revenue/get-revenue-list").then(res => {
        dispatch({
            type: GET_REVENUE_DATA,
            payload: res.data
        });
    });
}
