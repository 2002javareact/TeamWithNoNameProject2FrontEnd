import { Goal } from "../Components/Models/Goals";
import { Project2Client } from "./Project2Client";
import { InternalServiceError } from "../Components/Errors/InternalServiceError";

export async function UpdateGoalRequest(
	goalId: number,
	name: string,
	description: string,
	goalLength: number,
	startDate: number,
	completeDate: number,
	successful: boolean
): Promise<Goal> {
	let updatedGoal = {
		goalId,
		name,
		description,
		goalLength,
		startDate,
		completeDate,
		successful
	};

	try {
		let res = await Project2Client.patch("/goals", updatedGoal);

		return res.data;
	} catch (e) {
		throw new InternalServiceError();
	}
}
