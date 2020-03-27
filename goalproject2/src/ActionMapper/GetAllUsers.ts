import { Dispatch } from "redux";
import { FetchAllUsers } from '../Remote/UserGetAllRequest'



export const usersTypes = {
    GET_ALL_USERS: 'PROJECT-2_GET_ALL_USERS',
    FAILED_TO_RETRIEVE_USERS:'PROJECT-2_FAILED_TO_RETRIEVE_USERS'
}



export const getAllUsersActionMapper = () => async (dispatch:Dispatch) => {
    // try to get all users from a remote function
    try{
        let usersArray = await FetchAllUsers()
        //if we do call dispatch with those users
        dispatch({
            type: usersTypes.GET_ALL_USERS,
            payload:{
                usersArray
            }
        })
    } catch (e){
            //catch any errors and dispatch a bad action
        dispatch({
            type:usersTypes.FAILED_TO_RETRIEVE_USERS
        })
    }
    //function completes
}


/*
export const FindAllUserTypes = {
    SUCCESSFUL : 'PROJECT-2_FOUND_AllUSERS',
    USERS_NOT_FOUND: 'PROJECT-2_AllUSERS_NOT_FOUND',
    INTERNAL_SERVER: 'PROJECT-2_INTERNAL_SERVER_ERROR'
}

export const GetAllUsersActionMapper = () => async  (dispatch:Dispatch) => {
    try{
        let user = await UserGetAllRequest()
        dispatch({
            type:  FindAllUserTypes.SUCCESSFUL,
            payload:{
                user
            }
        })
    }catch(e){
        if(e.status === 404){
            dispatch({
                type:FindAllUserTypes.USERS_NOT_FOUND
            })
        }else {
            dispatch({
                type:FindAllUserTypes.INTERNAL_SERVER
            })
        }
    }

}

*/