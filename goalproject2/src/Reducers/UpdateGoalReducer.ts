import { IUpdateGoalState } from ".";

import { Goal } from "../Components/Models/Goals";
import { AnyAction } from "redux";
import { UpdateGoalTypes } from "../ActionMapper/UpdateGoalActionMapper";

export const initialState: IUpdateGoalState = {
	updatedGoal: new Goal(0, 0, "", "", 0, 0, 0, false),
	errorMessage: ""
};

//we make a reduce for updating this piece of state
export const UpdateGoalReducer = (state = initialState, action: AnyAction) => {
	// whatever this reducer returns, becomes the state for this piece of state
	switch (action.type) {
		// each case for a different kind of action
		case UpdateGoalTypes.SUCCESSFUL_GOAL_UPDATE: {
			// if you do not return a new object
			//react will not trigger a render
			return {
				...state,
				updatedGoal: action.payload.updatedGoal,
				errorMessage: ""
			};
		}
		case UpdateGoalTypes.INTERNAL_SERVER_ERROR: {
			return {
				...state,
				errorMessage: "Did not update"
			};
		}
		default:
			return state;
	}
};
