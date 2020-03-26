import { Users } from "../Components/Models/Users"
import { ICreateUserState} from "."
import { Role } from "../Components/Models/Role"
import { AnyAction } from "redux"
import { CreateUserTypes } from "../ActionMapper/CreateUserActionMapper"

export const initialState:ICreateUserState = {
    createdUser: new Users(0,'','','','','',new Role(1,'')),
    errorMessage:''
}


export const CreateUserReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) {
        // each case for a different kind of action
        case CreateUserTypes.SUCCESSFUL_CREATION:{           
         
            return {
                ...state,
                createdUser: action.payload.createdUser,
                errorMessage:'User Created' 
             }
            }
       case CreateUserTypes.INTERNAL_SERVER_ERROR:{
           return {
           ...state,
           errorMessage:'Something Went Wrong'
           }
       }      
        default:{
            return state;
        }
    }
  }

