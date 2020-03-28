import React, { SyntheticEvent } from "react";
import { Goal } from "../Models/Goals";
import { Users } from "../Models/Users";

import {
	Container,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Card,
	CardTitle,
	CardText
} from "reactstrap";
import { Redirect } from "react-router";

interface ICreateGoalProps {
	createdGoal: Goal;
	loggedUser: Users;
	CreateGoalActionMapper: (
		user: Users,
		name: string,
		description: string,
		goalLength: number,
		startDate: number,
		successful: boolean
	) => void;
	errorMessage: string;
}

interface ICreateGoalState {
	user: Users;
	name: string;
	description: string;
	goalLength: number;
	startDate: number;
	successful: boolean;
}
export class CreateGoalComponent extends React.Component<
	ICreateGoalProps,
	ICreateGoalState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			user: this.props.loggedUser,
			name: "",
			description: "",
			goalLength: 0,
			startDate: 0,
			successful: false
		};
	}


	updateName = (e: any) => {
		this.setState({
			name: e.currentTarget.value
		});
	};

	updateDescription = (e: any) => {
		this.setState({
			description: e.currentTarget.value
		});
	};

	updateGoalLength = (e: any) => {
		this.setState({
			goalLength: e.currentTarget.value
		});
	};

	updateStartDate = (e: any) => {
		this.setState({
			startDate: e.currentTarget.value
		});
	};

	submit = async (e: SyntheticEvent) => {
		e.preventDefault();
		this.props.CreateGoalActionMapper(
			this.state.user,
			this.state.name,
			this.state.description,
			this.state.goalLength,
			this.state.startDate,
			false
		);
		// when we reach this point we don;t get that return value from the mapper
		// that value got hijacked and was sent to dispatch
	};

	render() {
		return this.props.loggedUser.username === "" ? (
			<Redirect to="/homepage" />
		) : this.props.createdGoal.goalId === 0? (
			<Container>
				<h2>Set up a Goal</h2>
				<Col>
					<Form onSubmit={this.submit}>
						<FormGroup>
							<Label>Name</Label>
							<Input
								onChange={this.updateName}
								value={this.state.name}
								type="text"
								name="name"
								id="name"
								placeholder="goal name"
								required
							/>
						</FormGroup>

						<FormGroup>
							<Label>description</Label>
							<Input
								onChange={this.updateDescription}
								value={this.state.description}
								type="text"
								name="description"
								id="description"
								placeholder="goal description"
								required
							/>
						</FormGroup>

						<FormGroup>
							<Label>Goal Length </Label>
							<Input
								onChange={this.updateGoalLength}
								value={this.state.goalLength}
								type="number"
								name="goalLength"
								id="goalLength"
								placeholder="goal length"
								required
							/>
						</FormGroup>

						<FormGroup>
							<Label>Start Date</Label>
							<Input
								onChange={this.updateStartDate}
								value={this.state.startDate}
								type="date"
								name="startDate"
								id="startDate"
								placeholder="startDate"
								required
							/>
						</FormGroup>

						<Button>Submit</Button>
					</Form>
				</Col>
			</Container>
		) : (
			<Container>
				<Card>
					<CardTitle>{`Name: ${this.props.createdGoal.name}`}</CardTitle>
					<CardText>{`Description: ${this.props.createdGoal.description}`}</CardText>
					<CardText>{`Goal Length: ${this.props.createdGoal.goalLength}`}</CardText>
					<CardText>{`Start Date ${this.props.createdGoal.startDate}`}</CardText>
					<CardText>{`Complete Date: ${this.props.createdGoal.completeDate}`}</CardText>
				</Card>
				<p>{this.props.errorMessage}</p>
			</Container>
		);
	}
} //end of class
