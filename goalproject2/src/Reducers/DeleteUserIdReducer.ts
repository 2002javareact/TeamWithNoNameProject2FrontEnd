import { Users } from "../Components/Models/Users"
import { IDeleteUserState } from "."
import { Role } from "../Components/Models/Role"
import { AnyAction } from "redux"
import { DeleteByUserIdTypes } from "../ActionMapper/UserDeleteById"

export const initialState:IDeleteUserState = {
    deletedUser: new Users(0,'','','','','',new Role(1,'')),
    errorMessage:''
}

//we make a reduce for updating this piece of state
export const deleteByUserIdReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case DeleteByUserIdTypes.SUCCESSFUL_USER_DELETE:{
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                deletedUser: action.payload.deletedUser,
                errorMessage: 'User deleted'
            }
       }
      
        case DeleteByUserIdTypes.DELETE_USER_INTERNAL_SERVER_ERROR:{
            return {
                ...state,
                errorMessage:'Please Provide an existing User Id'
            }
        }
        default:
            return state;
    }
}
