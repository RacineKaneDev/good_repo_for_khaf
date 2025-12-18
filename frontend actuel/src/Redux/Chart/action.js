import {
    FETCH_EARNINGS_REQUEST,
    FETCH_EARNINGS_SUCCESS,
    FETCH_EARNINGS_FAILURE,
    FETCH_BOOKINGS_REQUEST,
    FETCH_BOOKINGS_SUCCESS,
    FETCH_BOOKINGS_FAILURE,
} from "./actionTypes";
import { api } from "../../config/api";

const API_BASE_URL = "/api/interview-booking";

export const fetchEarnings = () => async (dispatch) => {
    dispatch({ type: FETCH_EARNINGS_REQUEST });
    try {
        const response = await api.get(`${API_BASE_URL}/report`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            params: { companyId: 1 } // TODO: dynamically get company ID
        });
        console.log("earning chart response: ", response.data);

        // Transform report to chart friendly format if needed, 
        // or just pass the report for stats cards.
        // For now passing raw report data.
        dispatch({ type: FETCH_EARNINGS_SUCCESS, payload: response.data });
    } catch (error) {
        console.log("error fetching earnings chart response: ", error)
        dispatch({
            type: FETCH_EARNINGS_FAILURE,
            payload: error.response?.data || error.message,
        });
    }
};

export const fetchBookings = () => async (dispatch) => {
    dispatch({ type: FETCH_BOOKINGS_REQUEST });
    try {
        // Using same report endpoint for bookings stats as it contains totalBookings
        const response = await api.get(`${API_BASE_URL}/report`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({
            type: FETCH_BOOKINGS_FAILURE,
            payload: error.response?.data || error.message,
        });
    }
};
