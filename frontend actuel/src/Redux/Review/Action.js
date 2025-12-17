import {
    CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAILURE,
    GET_COMPANY_REVIEWS_REQUEST, GET_COMPANY_REVIEWS_SUCCESS, GET_COMPANY_REVIEWS_FAILURE
} from "./actionTypes";
import { api } from "../../config/api";

export const createReview = (reviewData) => async (dispatch) => {
    dispatch({ type: CREATE_REVIEW_REQUEST });
    try {
        const response = await api.post('/api/reviews', reviewData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        });
        dispatch({ type: CREATE_REVIEW_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.message });
    }
};

export const getCompanyReviews = (companyId) => async (dispatch) => {
    dispatch({ type: GET_COMPANY_REVIEWS_REQUEST });
    try {
        const response = await api.get(`/api/reviews/company/${companyId}`);
        dispatch({ type: GET_COMPANY_REVIEWS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_COMPANY_REVIEWS_FAILURE, payload: error.message });
    }
};
