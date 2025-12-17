import {
    GET_ALL_CATEGORIES_REQUEST, GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILURE
} from "./actionTypes";

const initialState = {
    categories: [],
    isLoading: false,
    error: null
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES_REQUEST:
            return { ...state, isLoading: true, error: null };
        case GET_ALL_CATEGORIES_SUCCESS:
            return { ...state, isLoading: false, categories: action.payload };
        case GET_ALL_CATEGORIES_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
