import {
    CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAILURE,
    GET_COMPANY_REVIEWS_REQUEST, GET_COMPANY_REVIEWS_SUCCESS, GET_COMPANY_REVIEWS_FAILURE
} from "./actionTypes";

const initialState = {
    reviews: [],
    isLoading: false,
    error: null
};

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
        case GET_COMPANY_REVIEWS_REQUEST:
            return { ...state, isLoading: true, error: null };

        case CREATE_REVIEW_SUCCESS:
            return { ...state, isLoading: false, reviews: [...state.reviews, action.payload] };

        case GET_COMPANY_REVIEWS_SUCCESS:
            return { ...state, isLoading: false, reviews: action.payload };

        case CREATE_REVIEW_FAILURE:
        case GET_COMPANY_REVIEWS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
