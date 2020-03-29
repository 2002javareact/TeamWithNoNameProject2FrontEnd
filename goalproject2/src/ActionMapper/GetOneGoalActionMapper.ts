import { Dispatch } from "redux"
import { getOneGoal } from "../Remote/GetOneGoalRemote"

export const oneGoalTypes = {
    GET_ONE_GOAL: "GOT_ONE_GOAL",
    FAILED_TO_GET_ONE_GOAL: "FAILED_TO_GET_ONE_GOAL"
}

export const getOneGoalActionMapper = (id: number) => async (dispatch: Dispatch) => {


    try {
        let oneGoal = await getOneGoal(id)
        dispatch({
            type: oneGoalTypes.GET_ONE_GOAL,
            payload: {
                oneGoal
            }
        })
    } catch (e) {
        dispatch({
            type: oneGoalTypes.FAILED_TO_GET_ONE_GOAL
        })
    }
}