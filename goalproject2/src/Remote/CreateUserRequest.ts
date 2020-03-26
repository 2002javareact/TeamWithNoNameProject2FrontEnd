import { Users } from "../Components/Models/Users"
import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Components/Errors/InternalServiceError"
import { Role } from "../Components/Models/Role"

export async function CreateUserRequest(username: string, password: string, firstName:string, lastName:string,email:string,role:Role):Promise<Users> {
    let createdUser = {
        username,
        password,
        firstName,
        lastName,
        email,
        role
    }

    try {
        let res = await Project2Client.post("/users",createdUser)        
            return res.data        
    } 
    catch (e) {
            throw new InternalServiceError()
        }
    }
