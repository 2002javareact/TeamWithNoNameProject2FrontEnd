import { IUpdateUserState } from "."
import { Role } from "../Compoinents/Models/Role"
import { Users } from "../Compoinents/Models/Users"
import { AnyAction } from "redux"
import { UpdateUserTypes } from "../ActionMapper/UpdateUserActionMapper"

export const initialState:IUpdateUserState = {
    updatedUser: new Users(0,'','','','','',new Role(0,'')),
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const UpdateUserReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case UpdateUserTypes.SUCCESSFUL_USER_UPDATE:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                updatedUser: action.payload.updatedUser,
                errorMessage:''            }
       }
        case UpdateUserTypes.UPDATE_USER_INTERNAL_SERVER_ERROR:{
            return {
                ...state,
                errorMessage:'Did not update'
            }
        }
        default:
            return state;
    }
}
