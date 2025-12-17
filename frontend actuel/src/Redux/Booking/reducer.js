import {
    CREATE_BOOKING_REQUEST, CREATE_BOOKING_SUCCESS, CREATE_BOOKING_FAILURE,
    GET_USER_BOOKINGS_REQUEST, GET_USER_BOOKINGS_SUCCESS, GET_USER_BOOKINGS_FAILURE
} from "./actionTypes";

const initialState = {
    bookings: [],
    currentBooking: null,
    isLoading: false,
    error: null
};

export const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BOOKING_REQUEST:
        case GET_USER_BOOKINGS_REQUEST:
            return { ...state, isLoading: true, error: null };

        case CREATE_BOOKING_SUCCESS:
            return { ...state, isLoading: false, currentBooking: action.payload };

        case GET_USER_BOOKINGS_SUCCESS:
            return { ...state, isLoading: false, bookings: action.payload };

        case CREATE_BOOKING_FAILURE:
        case GET_USER_BOOKINGS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
