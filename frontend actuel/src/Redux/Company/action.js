import {
    CREATE_COMPANY_REQUEST, CREATE_COMPANY_SUCCESS, CREATE_COMPANY_FAILURE,
    GET_ALL_COMPANIES_REQUEST, GET_ALL_COMPANIES_SUCCESS, GET_ALL_COMPANIES_FAILURE,
    GET_COMPANY_BY_ID_REQUEST, GET_COMPANY_BY_ID_SUCCESS, GET_COMPANY_BY_ID_FAILURE
} from "./actionTypes";
import { api } from "../../config/api";

export const createCompany = (companyData) => async (dispatch) => {
    dispatch({ type: CREATE_COMPANY_REQUEST });
    try {
        const response = await api.post('/api/companies', companyData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        });
        dispatch({ type: CREATE_COMPANY_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_COMPANY_FAILURE, payload: error.message });
    }
};

export const getAllCompanies = () => async (dispatch) => {
    dispatch({ type: GET_ALL_COMPANIES_REQUEST });
    try {
        const response = await api.get('/api/companies');
        dispatch({ type: GET_ALL_COMPANIES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_ALL_COMPANIES_FAILURE, payload: error.message });
    }
};

export const getCompanyById = (companyId) => async (dispatch) => {
    dispatch({ type: GET_COMPANY_BY_ID_REQUEST });
    try {
        const response = await api.get(`/api/companies/${companyId}`);
        dispatch({ type: GET_COMPANY_BY_ID_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_COMPANY_BY_ID_FAILURE, payload: error.message });
    }
};
