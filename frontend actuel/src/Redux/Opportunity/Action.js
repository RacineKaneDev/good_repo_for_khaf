import {
    CREATE_OPPORTUNITY_REQUEST, CREATE_OPPORTUNITY_SUCCESS, CREATE_OPPORTUNITY_FAILURE,
    GET_COMPANY_OPPORTUNITIES_REQUEST, GET_COMPANY_OPPORTUNITIES_SUCCESS, GET_COMPANY_OPPORTUNITIES_FAILURE
} from "./actionTypes";
import { api } from "../../config/api";

export const createOpportunity = (opportunityData) => async (dispatch) => {
    dispatch({ type: CREATE_OPPORTUNITY_REQUEST });
    try {
        const { companyId, categoryId, ...data } = opportunityData;
        const response = await api.post('/api/financing-opportunity', data, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
            params: { companyId, categoryId }
        });
        dispatch({ type: CREATE_OPPORTUNITY_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_OPPORTUNITY_FAILURE, payload: error.message });
    }
};

export const getCompanyOpportunities = (companyId) => async (dispatch) => {
    dispatch({ type: GET_COMPANY_OPPORTUNITIES_REQUEST });
    try {
        // Checking controller for right endpoint. Assuming /api/opportunities/company/{companyId} based on pattern
        // Will be verified against controller.
        const response = await api.get(`/api/financing-opportunity/company/${companyId}`);
        dispatch({ type: GET_COMPANY_OPPORTUNITIES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_COMPANY_OPPORTUNITIES_FAILURE, payload: error.message });
    }
};
