import {
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_SUCCESS,
    CREATE_PAYMENT_FAILURE,
    GET_PAYMENT_REQUEST,
    GET_PAYMENT_SUCCESS,
    GET_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_SUCCESS,
    UPDATE_PAYMENT_FAILURE,
} from "./actionTypes";
import { api } from "../../config/api";

export const createPayment = (bookingData, paymentMethod) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
        const response = await api.post(`/api/payments/create`, bookingData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
            params: { paymentMethod }
        });
        if (response.data.payment_link_url) {
            window.location.href = response.data.payment_link_url;
        }
        dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
};

export const getPaymentById = (paymentId) => async (dispatch) => {
    dispatch({ type: GET_PAYMENT_REQUEST });
    try {
        const response = await api.get(`/api/payments/${paymentId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        });
        dispatch({ type: GET_PAYMENT_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_PAYMENT_FAILURE, payload: error.message });
    }
};

export const updatePayment = (paymentData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
        const response = await api.patch(`/api/payments/proceed`, null, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
            params: {
                paymentId: paymentData.paymentId,
                paymentLinkId: paymentData.paymentLinkId
            }
        });
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
};
