import { Users } from "../Compoinents/Models/Users"
import { Role } from "../Compoinents/Models/Role"
import { AnyAction } from "redux"
import { loginTypes } from "../ActionMapper/LoginActionMapper"
import { ILoginState } from "."

export const initialState:ILoginState = {
    loggedUser: new Users(0,'','','','','',new Role(3,'')),
    errorMessage:''
}


export const LoginReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case loginTypes.SUCCESSFUL_LOGIN:{
            // if you do not return a new object
            //react will not trigger a render
         
            return {
                ...state,
                user: action.payload.loggedUser,
                errorMessage:'Login Successful' 
             }
       }
        case loginTypes.INVALID_CREDENTIALS:{
            return {
                ...state,
                errorMessage:'Username or Password Incorrect'
            }
        }
        case loginTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Please provide a username and a password!'
            }
        }
        default:
            return state;
    }
}
