import { IGoalInfoState } from "."
import { Goal } from "../Components/Models/Goals"
import { oneGoalTypes } from "../ActionMapper/GetOneGoalActionMapper"
import { AnyAction } from "redux"

const initialState: IGoalInfoState = {
    oneGoal: new Goal(0,0,'','',0,0,0,false),
    errorMessage: '',
}

export const goalInfoReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case oneGoalTypes.GET_ONE_GOAL: {
            return {
                ...state,
                oneGoal: action.payload.oneGoal,
                errorMessage: 'Goal Retrieved'
            }
        }
         case oneGoalTypes.FAILED_TO_GET_ONE_GOAL: {
            return {
                ...state,
                errorMessage: "Failed to Retrieve Goal"
            }
        }

        default:
            return state;
    }
}