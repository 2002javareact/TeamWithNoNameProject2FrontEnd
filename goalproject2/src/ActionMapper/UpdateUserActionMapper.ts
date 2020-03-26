import { Dispatch } from "redux"
import { UserUpdateRequest } from "../Remote/UserUpdateRequest"


export const UpdateUserTypes = {
    SUCCESSFUL_USER_UPDATE : 'PROJECT-2_USER_UPDATE_SUCCESS',
    UPDATE_USER_INTERNAL_SERVER_ERROR: 'PROJECT-2-USER_UPDATE_INTERNAL_SERVER_ERROR'
}

export const UpdateUserActionMapper = (user_id:number, username:string, password:string,firstName:string,lastName:string,email:string) => async  (dispatch:Dispatch) => {
    try {
        let loggedUser = await UserUpdateRequest(user_id, username,password,firstName,lastName,email)
        dispatch({
          type:  UpdateUserTypes. SUCCESSFUL_USER_UPDATE,
          payload:{
              loggedUser
          }
        })
    }catch(e){
            dispatch({
                type:UpdateUserTypes.UPDATE_USER_INTERNAL_SERVER_ERROR
            })
        }
    }

