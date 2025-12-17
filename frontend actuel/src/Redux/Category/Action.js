import {
    GET_ALL_CATEGORIES_REQUEST, GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILURE
} from "./actionTypes";
import { api } from "../../config/api";

export const getAllCategories = () => async (dispatch) => {
    dispatch({ type: GET_ALL_CATEGORIES_REQUEST });
    try {
        const response = await api.get('/api/categories');
        dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_ALL_CATEGORIES_FAILURE, payload: error.message });
    }
};
