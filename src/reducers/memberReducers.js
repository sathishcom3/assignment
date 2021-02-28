import { memberTypes } from "../types/member_type";
import Members from "../jsons/members.json";

const INTIAL_STATE = {
    memberList: Members,
    userEvent: []
}

const memberReducer = (state = INTIAL_STATE, action) => {
    let finalState;
    switch (action.type) {
        case memberTypes.SAVE:
            return finalState = { ...state }
        case memberTypes.ADD_EVENT:
            const { memberName, eventName } = action.data;
            finalState = { ...state }
            let oldUserEvent = finalState.userEvent;
            oldUserEvent[memberName] = eventName;
            console.log("oldUserEvent ", oldUserEvent);
            finalState = {
                ...state, userEvent: {
                    ...state.userEvent, userEvent: oldUserEvent
                }
            }
            console.log("finalState ", finalState);
            return finalState;
            break;
        default:
            return state;
    }
}

export default memberReducer;