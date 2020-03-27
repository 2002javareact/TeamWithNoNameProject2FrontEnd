import { Goal } from "../Components/Models/Goals";
import { ICreateGoalState } from ".";

import { AnyAction } from "redux";
import { CreateGoalTypes } from "../ActionMapper/CreateGoalActionMapper";

export const initialState: ICreateGoalState = {
	createdGoal: new Goal(0, 0, "", "", 0, 0, 0, false),
	errorMessage: ""
};

export const CreateGoalReducer = (state = initialState, action: AnyAction) => {
	// whatever this reducer returns, becomes the state for this piece of state
	switch (action.type) {
		// each case for a different kind of action
		case CreateGoalTypes.SUCCESSFUL_CREATION: {
			return {
				...state,
				createdGoal: action.payload.createdGoal,
				errorMessage: "Goal Created"
			};
		}
		case CreateGoalTypes.INTERNAL_SERVER_ERROR: {
			return {
				...state,
				errorMessage: "Something Went Wrong"
			};
		}
		default: {
			return state;
		}
	}
};
