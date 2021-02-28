import { memberTypes } from "../types/member_type";

export const fetchMemnerList = (reqParam) => {
    return (dispatch) => {
    }
}


export const addEvent = (userName, eventName) => {
     console.log("userName ", userName, " eventName ", eventName);
    return dispatch => { dispatch({ type: memberTypes.ADD_EVENT, data: { userName, eventName } }) }
}