import { combineReducers } from "redux";
import { Users } from "../Compoinents/Models/Users";
import { LoginReducer } from "./LoginReducer";
import { CreateUserReducer } from "./CreateUserReducer";

//make interfaces for each "piece" of state
export interface ILoginState{
    loggedUser:Users
    errorMessage:string
}
export interface ICreateUserState{
    createdUser:Users
    errorMessage:string
}

//define all of the pieces of state
export interface IState{
    loggedUser:ILoginState
    createdUser:ICreateUserState

}
//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
    loggedUser:LoginReducer,
    createdUser:CreateUserReducer,

})