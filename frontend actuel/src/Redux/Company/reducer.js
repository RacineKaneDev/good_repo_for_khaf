import {
    CREATE_COMPANY_REQUEST, CREATE_COMPANY_SUCCESS, CREATE_COMPANY_FAILURE,
    GET_ALL_COMPANIES_REQUEST, GET_ALL_COMPANIES_SUCCESS, GET_ALL_COMPANIES_FAILURE,
    GET_COMPANY_BY_ID_REQUEST, GET_COMPANY_BY_ID_SUCCESS, GET_COMPANY_BY_ID_FAILURE
} from "./actionTypes";

const initialState = {
    companies: [],
    company: null, // Specific company details
    userCompany: null, // Company owned by logged-in user
    isLoading: false,
    error: null
};

export const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMPANY_REQUEST:
        case GET_ALL_COMPANIES_REQUEST:
        case GET_COMPANY_BY_ID_REQUEST:
            return { ...state, isLoading: true, error: null };

        case CREATE_COMPANY_SUCCESS:
            return { ...state, isLoading: false, company: action.payload };

        case GET_ALL_COMPANIES_SUCCESS:
            return { ...state, isLoading: false, companies: action.payload };

        case GET_COMPANY_BY_ID_SUCCESS:
            return { ...state, isLoading: false, company: action.payload };

        case CREATE_COMPANY_FAILURE:
        case GET_ALL_COMPANIES_FAILURE:
        case GET_COMPANY_BY_ID_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
