import { eventTypes } from "../types/event_types";

export const fetchEventList = (reqParam) => {
    return (dispatch) => {
        dispatch({ type: eventTypes.SAVE, payload: { data: reqParam } })
    }
}