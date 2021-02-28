import { assignmentTypes } from "../types/assignment_type";

const INTIAL_STATE = {
    userDetails: [{ name: "test", id: "1" }],
    payload: ""
}

const assignmentReducer = (state = INTIAL_STATE, action) => {
    let finalState;

    switch (action.type) {
        case assignmentTypes.SAVE:
            return finalState = {
                ...state,
                payload: action?.payload?.data
            }
        default:
            return state;
    }

}

export default assignmentReducer;