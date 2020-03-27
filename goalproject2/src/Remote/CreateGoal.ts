import { Users } from "../Components/Models/Users";
import { Goal } from "../Components/Models/Goals";
import { Project2Client } from "./Project2Client";
import { InternalServiceError } from "../Components/Errors/InternalServiceError";

export async function CreateGoalRequest(
	goalId: number,
	user: Users,
	name: string,
	description: string,
	goalLength: number,
	startDate: number,
	completeDate: number,
	successful: boolean
): Promise<Goal> {
	let createdGoal = {
		goalId,
		user,
		name,
		description,
		goalLength,
		startDate,
		completeDate,
		successful
	};

	try {
		let res = await Project2Client.post("/goals", createdGoal);

		return res.data;
	} catch (e) {
		throw new InternalServiceError();
	}
}
