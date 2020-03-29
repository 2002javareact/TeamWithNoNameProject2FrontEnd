import { Dispatch } from "redux";
import { deleteUserById } from "../Remote/UserDeleteById";

export const DeleteByUserIdTypes = {
    SUCCESSFUL_USER_DELETE : 'PROJECT-2_DELETED_USER',
    DELETE_USER_INTERNAL_SERVER_ERROR: 'PROJECT-2_DELETE_INTERNAL_SERVER_ERROR'
}

export const UserDeleteByIdActionMapper = (userId:number) => async  (dispatch:Dispatch) => {
    try{
        let deletedUser = await deleteUserById(userId)
        dispatch({
            type:  DeleteByUserIdTypes.SUCCESSFUL_USER_DELETE,
            payload:{
                deletedUser
            }
        })
    }catch(e){
            dispatch({
                type:DeleteByUserIdTypes.DELETE_USER_INTERNAL_SERVER_ERROR
            })
        }
    }
