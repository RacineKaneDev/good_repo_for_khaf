import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
    LOGOUT
} from "./actionTypes";
import { api } from "../../config/api";

export const registerUser = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const response = await api.post('/auth/signup', userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        dispatch({ type: REGISTER_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.message });
    }
};

export const loginUser = (loginData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await api.post('/auth/login', loginData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
};

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        const response = await api.get('/api/users/profile', {
            headers: { Authorization: `Bearer ${jwt}` }
        });
        const user = response.data;
        dispatch({ type: GET_USER_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.message });
    }
};

export const logout = () => (dispatch) => {
    localStorage.clear();
    dispatch({ type: LOGOUT });
};
