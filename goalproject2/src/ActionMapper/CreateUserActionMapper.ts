import { Dispatch } from "redux"
import { CreateUserRequest } from "../Remote/CreateUserRequest"


export const CreateUserTypes = {
    SUCCESSFUL_CREATION : 'PROJECT-2_USER_CREATION_SUCCESS',
    INTERNAL_SERVER_ERROR: 'PROJECT-2-USER_CREATION_INTERNAL_SERVER_ERROR'
}

export const CreateUserActionMapper = (username:string, password:string,firstName:string,lastName:string,email:string) => async  (dispatch:Dispatch) => {
    try {
        let loggedUser = await CreateUserRequest(username,password,firstName,lastName,email)
        dispatch({
          type:  CreateUserTypes.SUCCESSFUL_CREATION,
          payload:{
              loggedUser
          }
        })
    }catch(e){
            dispatch({
                type:CreateUserTypes.INTERNAL_SERVER_ERROR
            })
        }
    }

