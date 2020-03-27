import { Dispatch } from "redux";
import { CreateGoalRequest } from "../Remote/CreateGoal";
import { Users } from "../Components/Models/Users";

export const CreateGoalTypes = {
	SUCCESSFUL_CREATION: "PROJECT-2_GOAL_CREATION_SUCCESS",
	INTERNAL_SERVER_ERROR: "PROJECT-2-GOAL_CREATION_INTERNAL_SERVER_ERROR"
};

export const CreateGoalActionMapper = (
	goalId: number,
	user: Users,
	name: string,
	description: string,
	goalLength: number,
	startDate: number,
	completeDate: number,
	successful: boolean
) => async (dispatch: Dispatch) => {
	try {
		let createdGoal = await CreateGoalRequest(
			0,
			user,
			name,
			description,
			goalLength,
			startDate,
			completeDate,
			successful
		);
		console.log(createdGoal);
		dispatch({
			type: CreateGoalTypes.SUCCESSFUL_CREATION,
			payload: {
				createdGoal
			}
		});
	} catch (e) {
		dispatch({
			type: CreateGoalTypes.INTERNAL_SERVER_ERROR
		});
	}
};
