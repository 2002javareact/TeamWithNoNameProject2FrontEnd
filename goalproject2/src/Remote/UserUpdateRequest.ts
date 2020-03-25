import { Users } from "../Compoinents/Models/Users"
import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Compoinents/Errors/InternalServiceError"

export async function UserUpdateRequest(user_id:number, username: string, password: string, firstName:string, lastName:string,email:string):Promise<Users> {
    let updatedUser = {
        user_id,
        username,
        password,
        firstName,
        lastName,
        email
    }

    try {
        let res = await Project2Client.patch("/users/", updatedUser)
        
            return res.data        
    } 
    catch (e) {
            throw new InternalServiceError()
        }
    }
