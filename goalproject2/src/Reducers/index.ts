import { combineReducers } from "redux";
import { Users } from "../Components/Models/Users";
import { Goal } from "../Components/Models/Goals";
import { LoginReducer } from "./LoginReducer";
import { CreateUserReducer } from "./CreateUserReducer";
import { UpdateUserReducer } from "./UpdateUserReducer";
import { CreateGoalReducer } from "./CreateGoalReducer";
import { UpdateGoalReducer } from "./UpdateGoalReducer";
import { findByUserIdReducer } from "./FindByUserIdReducer";
<<<<<<< HEAD
import { usersReducer } from "./AllUsersReducer"
=======
import { usersReducer}  from "./GetAllUsersReducer"
>>>>>>> 6855bf349eb7f9563abf5453fea7c8ce90bd4b51
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

//define all of the pieces of state
export interface IState {
	loggedUser: ILoginState;
	createdUser: ICreateUserState;
	updateUser: IUpdateUserState;
	userId: IFindByUserIdState;
	createdGoal: ICreateGoalState;
	updatedGoal: IUpdateGoalState;
<<<<<<< HEAD
	allUsers:IUsersState
=======
	users: IUsersState;
>>>>>>> 6855bf349eb7f9563abf5453fea7c8ce90bd4b51
}
//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
	loggedUser: LoginReducer,
	createdUser: CreateUserReducer,
	updateUser: UpdateUserReducer,
	userId: findByUserIdReducer,
	createdGoal: CreateGoalReducer,
	updatedGoal: UpdateGoalReducer,
<<<<<<< HEAD
	allUsers:usersReducer,
=======
	users: usersReducer
>>>>>>> 6855bf349eb7f9563abf5453fea7c8ce90bd4b51
});
