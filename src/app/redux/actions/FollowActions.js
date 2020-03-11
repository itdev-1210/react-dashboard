import axios from "axios";
export const GET_FOLLOW_DATA = "FOLLOW_GET_DATA";

export const getFollowData = () => dispatch => {
    axios.get("/api/follow/get-follow-list").then(res => {
        dispatch({
            type: GET_FOLLOW_DATA,
            payload: res.data
        });
    });
}
