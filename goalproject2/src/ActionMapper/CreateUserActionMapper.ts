import { Dispatch } from "redux"
import { CreateUserRequest } from "../Remote/CreateUserRequest"
import { Role } from "../Components/Models/Role"


export const CreateUserTypes = {
    SUCCESSFUL_CREATION : 'PROJECT-2_USER_CREATION_SUCCESS',
    INTERNAL_SERVER_ERROR: 'PROJECT-2-USER_CREATION_INTERNAL_SERVER_ERROR'
}

export const CreateUserActionMapper = (userId:number,username:string, password:string,firstName:string,lastName:string,email:string,role:Role) => async  (dispatch:Dispatch) => {
    try {
        let createdUser = await CreateUserRequest(0,username,password,firstName,lastName,email,role)
        console.log(createdUser)
        dispatch({
          type:  CreateUserTypes.SUCCESSFUL_CREATION,
          payload:{
              createdUser
          }
        })
    }catch(e){
            dispatch({
                type:CreateUserTypes.INTERNAL_SERVER_ERROR
            })
        }
    }

