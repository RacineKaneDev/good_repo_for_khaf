import {
    CREATE_OPPORTUNITY_REQUEST, CREATE_OPPORTUNITY_SUCCESS, CREATE_OPPORTUNITY_FAILURE,
    GET_COMPANY_OPPORTUNITIES_REQUEST, GET_COMPANY_OPPORTUNITIES_SUCCESS, GET_COMPANY_OPPORTUNITIES_FAILURE
} from "./actionTypes";

const initialState = {
    opportunities: [],
    isLoading: false,
    error: null
};

export const opportunityReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OPPORTUNITY_REQUEST:
        case GET_COMPANY_OPPORTUNITIES_REQUEST:
            return { ...state, isLoading: true, error: null };

        case CREATE_OPPORTUNITY_SUCCESS:
            return { ...state, isLoading: false, opportunities: [...state.opportunities, action.payload] };

        case GET_COMPANY_OPPORTUNITIES_SUCCESS:
            return { ...state, isLoading: false, opportunities: action.payload };

        case CREATE_OPPORTUNITY_FAILURE:
        case GET_COMPANY_OPPORTUNITIES_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
