import { Users } from "../Compoinents/Models/Users"
import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Compoinents/Errors/InternalServiceError"

export async function UserGetAllRequest():Promise<Users>
 {
    
    try {
        let res = await Project2Client.get("/users/")
        
            return res.data        
    } 
    catch (e) {
            throw new InternalServiceError()
        }
 }
