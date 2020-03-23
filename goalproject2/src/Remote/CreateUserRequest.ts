import { Users } from "../Compoinents/Models/Users"
import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Compoinents/Errors/InternalServiceError"

export async function CreateUserRequest(username: string, password: string, firstName:string, lastName:string,email:string):Promise<Users> {
    let createdUser = {
        username,
        password,
        firstName,
        lastName,
        email
    }

    try {
        let res = await Project2Client.post("/users/login",createdUser)
        
            return res.data        
    } 
    catch (e) {
            throw new InternalServiceError()
        }
    }
