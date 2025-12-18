import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { companyReducer } from "./Company/reducer";
import { bookingReducer } from "./Booking/reducer";
import { preventionReducer } from "./Prevention/reducer";
import { notificationReducer } from "./Notification/reducer";
import { reviewReducer } from "./Review/reducer";
import { categoryReducer } from "./Category/reducer";
import { opportunityReducer } from "./Opportunity/reducer";
import { chartReducer } from "./Chart/reducer";
import { paymentReducer } from "./Payment/reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    company: companyReducer,
    booking: bookingReducer,
    prevention: preventionReducer,
    notification: notificationReducer,
    review: reviewReducer,
    category: categoryReducer,
    opportunity: opportunityReducer,
    chart: chartReducer,
    payment: paymentReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
