import { Dispatch } from "redux";
import { UpdateGoalRequest } from "../Remote/Updategoal";

export const UpdateGoalTypes = {
	SUCCESSFUL_GOAL_UPDATE: "PROJECT-2_GOAL_UPDATE_SUCCESS",
	INTERNAL_SERVER_ERROR: "PROJECT-2-GOAL_UPDATE_INTERNAL_SERVER_ERROR"
};

export const UpdateGoalActionMapper = (
	goalId: number,
	name: string,
	description: string,
	goalLength: number,
	startDate: number,
	completeDate: number,
	successful: boolean
) => async (dispatch: Dispatch) => {
	try {
		let updatedGoal = await UpdateGoalRequest(
			goalId,
			name,
			description,
			goalLength,
			startDate,
			completeDate,
			successful
		);
		console.log(updatedGoal);
		dispatch({
			type: UpdateGoalTypes.SUCCESSFUL_GOAL_UPDATE,
			payload: {
				updatedGoal
			}
		});
	} catch (e) {
		dispatch({
			type: UpdateGoalTypes.INTERNAL_SERVER_ERROR
		});
	}
};
