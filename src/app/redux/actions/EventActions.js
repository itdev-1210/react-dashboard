import axios from "axios";
export const GET_EVENT_DATA = "EVENT_GET_DATA";

export const getEventData = () => dispatch => {
    axios.get("/api/event/get-event-list").then(res => {
        dispatch({
            type: GET_EVENT_DATA,
            payload: res.data
        });
    });
}
