import { IAllGoalsState } from ".";
import { AnyAction } from "redux";
import { goalTypes } from "../ActionMapper/GetAllGoalsByUserIdActionMapper";
import { Goal } from "../Components/Models/Goals";
import { oneGoalTypes } from "../ActionMapper/GetOneGoalActionMapper";




const initialState: IAllGoalsState = {
    allGoals: [],
    errorMessage: '',
    currentGoalId: 0,
    currentGoal: new Goal(0, 0, "", "", 0, 0, 0, false)
}

export const allGoalReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case goalTypes.GET_ALL_GOALS: {
            return {
                ...state,
                allGoals: action.payload.allGoals,
                errorMessage: 'Goals Retrieved'
            }
        }
        case goalTypes.FAILED_TO_GET_ALL_GOALS: {
            return {
                ...state,
                errorMessage: "Failed to Retrieve Goals"
            }
        } case oneGoalTypes.GET_ONE_GOAL: {
            return {
                ...state,
                currentGoal: action.payload.oneGoal,
                errorMessage: "Got one Goal"
            }
        } case oneGoalTypes.FAILED_TO_GET_ONE_GOAL: {
            return {
                ...state,
                errorMessage: "Failed to Retrieve Goal"
            }
        }

        default:
            return state;
    }
}