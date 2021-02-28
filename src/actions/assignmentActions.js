import { assignmentTypes } from "../types/assignment_type";

export const assignmentAction = (reqParam) => {
    return (dispatch) => {
        dispatch({ type: assignmentTypes.SAVE, payload: { data: reqParam } })
    }
}