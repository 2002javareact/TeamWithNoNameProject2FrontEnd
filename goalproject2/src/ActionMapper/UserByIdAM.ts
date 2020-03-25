import { Dispatch } from "redux";
import { UserInfoRequest } from '../Remote/UserInfoRequest'

export const FindByUserIdTypes = {
    SUCCESSFUL : 'PROJECT-2_FOUND_USER',
    USER_NOT_FOUND: 'PROJECT-2_USER_NOT_FOUND',
    INTERNAL_SERVER: 'PROJECT-2_INTERNAL_SERVER_ERROR'
}

export const UserByIdActionMapper = (userId:number) => async  (dispatch:Dispatch) => {
    try{
        let user = await UserInfoRequest(userId)
        dispatch({
            type:  FindByUserIdTypes.SUCCESSFUL,
            payload:{
                user
            }
        })
    }catch(e){
        if(e.status === 404){
            dispatch({
                type:FindByUserIdTypes.USER_NOT_FOUND
            })
        }else {
            dispatch({
                type:FindByUserIdTypes.INTERNAL_SERVER
            })
        }
    }

}