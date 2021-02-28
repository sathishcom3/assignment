import Event from "../jsons/events.json";
import { eventTypes } from "../types/event_types";

const INTIAL_STATE = {
    eventList: Event,
}

const eventReducer = (state = INTIAL_STATE, action) => {
    let finalState;
    switch (action.type) {
        case eventTypes.SAVE:
            finalState = { ...state };
            return finalState
            break;
        default:
            return state;
    }
}


export default eventReducer;