import React, { SyntheticEvent } from "react";
import { Users } from "../Models/Users";
import { Goal } from "../Models/Goals";
import {
	Col,
	FormGroup,
	Label,
	Input,
	Form,
	Container,
	Button,
	Card,
	CardTitle,
	CardText
} from "reactstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

interface IUpdateGoalProps {
	updatedGoal: Goal;
	loggedUser: Users;
	errorMessage: string;
	UpdateGoalActionMapper: (
		goalId: number,
		name: string,
		description: string,
		goalLength: number,
		startDate: number,
		completeDate: number,
		successful: boolean
	) => void;
}

interface IUpdateGoalState {
	goalId: number;
	name: string;
	description: string;
	goalLength: number;
	startDate: number;
	completeDate: number;
	successful: boolean;
}
export class UpdateGoalComponent extends React.Component<
	IUpdateGoalProps,
	IUpdateGoalState
> {
	constructor(props: any) {
		super(props);
		this.state = {
			goalId: 0,
			name: "",
			description: "",
			goalLength: 0,
			startDate: 0,
			completeDate: 0,
			successful: true || false
		};
	}

	updateGoalId = (e: any) => {
		this.setState({
			goalId: e.currentTarget.value
		});
	};

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

	updateCompleteDate = (e: any) => {
		this.setState({
			completeDate: e.currentTarget.value
		});
	};

	submitGoal = async (e: SyntheticEvent) => {
		e.preventDefault();
		this.props.UpdateGoalActionMapper(
			this.state.goalId,
			this.state.name,
			this.state.description,
			this.state.goalLength,
			this.state.startDate,
			this.state.completeDate,
			this.state.successful
		);
		// when we reach this point we don;t get that return value from the mapper
		// that value got hijacked and was sent to dispatch
	};

	render() {
		return this.props.loggedUser.username === "" &&
			this.props.loggedUser.role.roleId !== 2 ? (
			<Redirect to="/homepage" />
		) : this.props.updatedGoal.description === "" ? (
			<>
				<Container>
					<h2>Goal Update Form</h2>
					<Col>
						<Form onSubmit={this.submitGoal}>
							<FormGroup>
								<Label>goalId</Label>
								<Input
									onChange={this.updateGoalId}
									value={this.state.goalId}
									type="number"
									name="goalId"
									id="goalId"
									placeholder="GoalId for goal to update"
									required
								/>
							</FormGroup>

							<FormGroup>
								<Label>Goal Name</Label>
								<Input
									onChange={this.updateName}
									value={this.state.name}
									type="text"
									name="name"
									id="name"
									placeholder="new name for this goal"
								/>
							</FormGroup>

							<FormGroup>
								<Label>Description</Label>
								<Input
									onChange={this.updateDescription}
									value={this.state.description}
									type="text"
									name="description"
									id="description"
									placeholder="new description"
								/>
							</FormGroup>

							<FormGroup>
								<Label>Goal Length</Label>
								<Input
									onChange={this.updateGoalLength}
									value={this.state.goalLength}
									type="number"
									name="goalLength"
									id="goalLength"
									placeholder="goalLength"
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
									placeholder="Update Start Date"
								/>
							</FormGroup>

							<FormGroup>
								<Label>Complete Date</Label>
								<Input
									onChange={this.updateCompleteDate}
									value={this.state.completeDate}
									type="date"
									name="completeDate"
									id="completeDate"
									placeholder="Update Complete Date"
								/>
							</FormGroup>
							<Button>Submit</Button>
						</Form>
					</Col>
				</Container>
			</>
		) : (
			<>
			<Card>
				<h3>Updated Goal</h3>
				<CardTitle>Updated Information </CardTitle>
				<CardText>{`Name: ${this.props.updatedGoal.name}`}</CardText>
				<CardText>{`Description: ${this.props.updatedGoal.description}`}</CardText>
				<CardText>{`GoalLength: ${this.props.updatedGoal.goalLength}`}</CardText>
				<CardText>{`Start Date: ${this.props.updatedGoal.startDate}`}</CardText>
				<CardText>{`Complete Date: ${this.props.updatedGoal.completeDate}`}</CardText>
				<CardText>{`Successful: ${this.props.updatedGoal.successful}`}</CardText>
			</Card>
			<Link to="/loggedInPage">Back to Homepage</Link>
			 </>
		);
	}
} //end of class
