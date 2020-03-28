import { IAllGoalsState } from ".";
import { AnyAction } from "redux";
import { goalTypes } from "../ActionMapper/getAllGoalsByUserIdActionMapper";




const initialState: IAllGoalsState = {
    allGoals: [],
    errorMessage: ''
}

export const allGoalReducer = (state = initialState, action: AnyAction)=>{
    switch (action.type) {
        case goalTypes.GET_ALL_GOALS: {
            return {
                ...state,
                allGoals: action.payload.allGoals,
                errorMessage: 'Goals Retreved'
            }
        }
        case goalTypes.FAILED_TO_GET_ALL_GOALS: {
            return {
                ...state,
                errorMessage: "Failed to Retrieve Goals"
            }
        }

        default:
            return state;
    }
}