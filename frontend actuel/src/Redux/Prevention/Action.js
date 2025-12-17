import {
    GET_ALL_PREVENTIONS_REQUEST, GET_ALL_PREVENTIONS_SUCCESS, GET_ALL_PREVENTIONS_FAILURE
} from "./actionTypes";
import { api } from "../../config/api";

export const getAllPreventions = () => async (dispatch) => {
    dispatch({ type: GET_ALL_PREVENTIONS_REQUEST });
    try {
        const response = await api.get('/api/preventions/all', {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        });
        dispatch({ type: GET_ALL_PREVENTIONS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_ALL_PREVENTIONS_FAILURE, payload: error.message });
    }
};
