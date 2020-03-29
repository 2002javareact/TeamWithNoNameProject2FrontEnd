import { combineReducers } from "redux";
import { Users } from "../Components/Models/Users";
import { Goal } from "../Components/Models/Goals";
import { LoginReducer } from "./LoginReducer";
import { CreateUserReducer } from "./CreateUserReducer";
import { UpdateUserReducer } from "./UpdateUserReducer";
import { CreateGoalReducer } from "./CreateGoalReducer";
import { UpdateGoalReducer } from "./UpdateGoalReducer";
import { findByUserIdReducer } from "./FindByUserIdReducer";
import { usersReducer } from "./AllUsersReducer"
import { allGoalReducer } from "./AllGoalsByUserReducer";
import { deleteByUserIdReducer } from "./DeleteUserIdReducer";

//make interfaces for each "piece" of state
export interface ILoginState {
	loggedUser: Users;
	errorMessage: string;
}
export interface ICreateUserState {
	createdUser: Users;
	errorMessage: string;
}

export interface IUpdateUserState {
	updatedUser: Users;
	errorMessage: string;
}

export interface IDeleteUserState {
	deletedUser: Users;
	errorMessage: string;
}


export interface IFindByUserIdState {
	userById: Users;
	errorMessage: string;
}

export interface IUsersState{
    allUsers:Users[]
    errorMessage:string
}

export interface ICreateGoalState {
	createdGoal: Goal;
	errorMessage: string;
}

export interface IUpdateGoalState {
	updatedGoal: Goal;
	errorMessage: string;
}
export interface IUsersState{
    allUsers:Users[]
    errorMessage:string
}

export interface IAllGoalsState{
	allGoals:Goal[]
	errorMessage:string
	currentGoalId:number
	currentGoal:Goal
}

//define all of the pieces of state
export interface IState {
	loggedUser: ILoginState;
	createdUser: ICreateUserState;
	updateUser: IUpdateUserState;
	deleteUser: IDeleteUserState;
	userId: IFindByUserIdState;
	createdGoal: ICreateGoalState;
	updatedGoal: IUpdateGoalState;
	allUsers:IUsersState
	allGoals:IAllGoalsState
}
//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
	loggedUser: LoginReducer,
	createdUser: CreateUserReducer,
	updateUser: UpdateUserReducer,
	deleteUser: deleteByUserIdReducer,
	userId: findByUserIdReducer,
	createdGoal: CreateGoalReducer,
	updatedGoal: UpdateGoalReducer,
	allUsers:usersReducer,
	allGoals:allGoalReducer,
});
