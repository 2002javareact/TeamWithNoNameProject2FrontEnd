import { LoginRequest } from "../Remote/LoginRequest"
import { Dispatch } from "redux"


export const loginTypes = {
    SUCCESSFUL_LOGIN : 'PROJECT-1-CABREROJESUS_SUCCESSFUL_LOGIN',
    INVALID_CREDENTIALS: 'PROJECT-1-CABREROJESUS_INVALID_CREDENTIALS',
    INTERNAL_SERVER: 'PROJECT-1-CABREROJESUS_INTERNAL_SERVER_ERROR'
}

export const LoginActionMapper = (username:string, password:string) => async  (dispatch:Dispatch) => {
    try {
        let loggedUser = await LoginRequest(username,password)
        dispatch({
          type:  loginTypes.SUCCESSFUL_LOGIN,
          payload:{
              loggedUser
          }
        })
    }catch(e){
        if(e.status === 401){
            dispatch({
                type:loginTypes.INVALID_CREDENTIALS
            })
        }else {
            dispatch({
                type:loginTypes.INTERNAL_SERVER
            })
        }
    }

}