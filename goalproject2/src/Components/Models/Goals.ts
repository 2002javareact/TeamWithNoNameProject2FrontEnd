export class Goal {
	goalId: number; // primary key
	userId: number; // foreign key -> User, not null
	name: string; // not null
	description: string; // not null
	goalLength: number; //
	startDate: number; // not null
	completeDate: number; // not null
	successful: boolean;

	constructor(
		goalId: number,
		userId: number,
		name: string,
		description: string,
		goalLength: number,
		startDate: number,
		completeDate: number,
		successful: boolean
	) {
		this.goalId = goalId;
		this.userId = userId;
		this.name = name;
		this.description = description;
		this.goalLength = goalLength;
		this.startDate = startDate;
		this.completeDate = completeDate;
		this.successful = successful;
	}
}
