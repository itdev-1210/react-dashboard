import axios from "axios";
export const GET_PEOPLE_DATA = "PEOPLE_GET_DATA";

export const getPeopleData = () => dispatch => {
    axios.get("/api/people/get-people-list").then(res => {
        dispatch({
            type: GET_PEOPLE_DATA,
            payload: res.data
        });
    });
}
