import {
    GET_USER_NOTIFICATIONS_REQUEST, GET_USER_NOTIFICATIONS_SUCCESS, GET_USER_NOTIFICATIONS_FAILURE,
    ADD_NOTIFICATION // Added import
} from "./actionTypes";

const initialState = {
    notifications: [],
    isLoading: false,
    error: null
};

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_NOTIFICATIONS_REQUEST:
            return { ...state, isLoading: true, error: null };
        case ADD_NOTIFICATION:
            return { ...state, notifications: [action.payload, ...state.notifications] };
        case GET_USER_NOTIFICATIONS_SUCCESS:
            return { ...state, isLoading: false, notifications: action.payload };
        case GET_USER_NOTIFICATIONS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
