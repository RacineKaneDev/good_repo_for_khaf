import {
    GET_USER_NOTIFICATIONS_REQUEST, GET_USER_NOTIFICATIONS_SUCCESS, GET_USER_NOTIFICATIONS_FAILURE
} from "./actionTypes";
import { api } from "../../config/api";

export const getUserNotifications = () => async (dispatch) => {
    dispatch({ type: GET_USER_NOTIFICATIONS_REQUEST });
    try {
        const response = await api.get('/api/notifications/user', {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        });
        dispatch({ type: GET_USER_NOTIFICATIONS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_USER_NOTIFICATIONS_FAILURE, payload: error.message });
    }
};
