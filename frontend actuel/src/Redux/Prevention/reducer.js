import {
    GET_ALL_PREVENTIONS_REQUEST, GET_ALL_PREVENTIONS_SUCCESS, GET_ALL_PREVENTIONS_FAILURE
} from "./actionTypes";

const initialState = {
    preventions: [],
    isLoading: false,
    error: null
};

export const preventionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PREVENTIONS_REQUEST:
            return { ...state, isLoading: true, error: null };
        case GET_ALL_PREVENTIONS_SUCCESS:
            return { ...state, isLoading: false, preventions: action.payload };
        case GET_ALL_PREVENTIONS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
