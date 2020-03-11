import axios from "axios";
export const GET_COUPON_DATA = "COUPON_GET_DATA";

export const getCouponData = () => dispatch => {
    axios.get("/api/coupon/get-coupon-list").then(res => {
        dispatch({
            type: GET_COUPON_DATA,
            payload: res.data
        });
    });
}
