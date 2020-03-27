import { Users } from "../Components/Models/Users";
import { TokenExpiredError } from "../Components/Errors/TokenExpiredError";
import { UserNotFoundError } from "../Components/Errors/UserNotFoundError";
import { InternalServiceError } from "../Components/Errors/InternalServiceError";
import { Project2Client } from "./Project2Client";

export async function FetchUserById(userId:number|undefined):Promise<Users>{    
    try{
        let res = await Project2Client.get(`/users/${userId}`)

        if(res.status === 400){
            throw new TokenExpiredError()
        }
        return res.data
    } catch (e) {
        if(e.status === 400){
            throw e
        } else if(e.status === 404){
            throw new UserNotFoundError()
        }
        else{
            throw new InternalServiceError()
        }
    }
}//end of class
