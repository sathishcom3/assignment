import { combineReducers } from 'redux';
import assignmentReducer from "./assignmentReducer";
import memberReducer from "./memberReducers";
import eventReducer from "./eventsReducer";

export default combineReducers({
    assignmentReducer,
    memberReducer,
    eventReducer
});