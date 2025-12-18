import {
    CREATE_BOOKING_REQUEST, CREATE_BOOKING_SUCCESS, CREATE_BOOKING_FAILURE,
    GET_USER_BOOKINGS_REQUEST, GET_USER_BOOKINGS_SUCCESS, GET_USER_BOOKINGS_FAILURE,
    GET_COMPANY_BOOKINGS_REQUEST, GET_COMPANY_BOOKINGS_SUCCESS, GET_COMPANY_BOOKINGS_FAILURE
} from "./actionTypes";
import { api } from "../../config/api";

export const createBooking = (bookingData) => async (dispatch) => {
    dispatch({ type: CREATE_BOOKING_REQUEST });
    try {
        const response = await api.post('/api/interview-booking', bookingData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
            params: { companyId: bookingData.companyId }
        });
        dispatch({ type: CREATE_BOOKING_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_BOOKING_FAILURE, payload: error.message });
    }
};

export const getUserBookings = () => async (dispatch) => {
    dispatch({ type: GET_USER_BOOKINGS_REQUEST });
    try {
        const response = await api.get(`/api/interview-booking/customer`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        });
        dispatch({ type: GET_USER_BOOKINGS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_USER_BOOKINGS_FAILURE, payload: error.message });
    }
};

export const getCompanyBookings = () => async (dispatch) => {
    dispatch({ type: GET_COMPANY_BOOKINGS_REQUEST });
    try {
        const response = await api.get(`/api/interview-booking/company`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        });
        dispatch({ type: GET_COMPANY_BOOKINGS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_COMPANY_BOOKINGS_FAILURE, payload: error.message });
    }
};
