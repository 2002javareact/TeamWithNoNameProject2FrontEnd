import { Users } from "../Compoinents/Models/Users";
import { Goal } from "../Compoinents/Models/Goals";
import { Project2Client } from "./Project2Client";
import { InternalServiceError } from "../Compoinents/Errors/InternalServiceError";

export async function CreateGoalRequest(
	user: Users,
	name: string,
	description: string,
	goalLength: number,
	startDate: number,
	completeDate: number,
	successful: boolean
): Promise<Goal> {
	let createdGoal = {
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
