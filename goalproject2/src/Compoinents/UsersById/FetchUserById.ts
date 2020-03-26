import { Users } from "../Models/Users";
import { TokenExpiredError } from "../Errors/TokenExpiredError";
import { UserNotFoundError } from "../Errors/UserNotFoundError";
import { InternalServiceError } from "../Errors/InternalServiceError";
import { Project2Client } from "../../Remote/Project2Client";

export async function FetchUserById(userId:number|undefined):Promise<Users>{    
    try{
        let res = await Project2Client.get(`/users/${userId}`)

        if(res.status === 401){
            throw new TokenExpiredError()
        }
        return res.data
    } catch (e) {
        if(e.status === 401){
            throw e
        } else if(e.status === 404){
            throw new UserNotFoundError()
        }
        else{
            throw new InternalServiceError()
        }
    }
}//end of class
