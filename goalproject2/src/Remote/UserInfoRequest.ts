import { Users } from "../Compoinents/Models/Users"
import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Compoinents/Errors/InternalServiceError"

export async function UserInfoRequest(user_id:number):Promise<Users>
 {
    
    try {
        let res = await Project2Client.get("/users/"+user_id)
        
            return res.data        
    } 
    catch (e) {
            throw new InternalServiceError()
        }
 }
