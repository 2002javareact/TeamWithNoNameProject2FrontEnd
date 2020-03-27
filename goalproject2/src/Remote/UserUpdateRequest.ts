import { Users } from "../Components/Models/Users"
import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Components/Errors/InternalServiceError"

export async function UserUpdateRequest(userId:number, username: string, password: string, firstName:string, lastName:string,email:string):Promise<Users> {
    let updatedUser = { userId, username,  password,  firstName,    lastName,   email   }

    try {
        let res = await Project2Client.patch("/users/", updatedUser)
        
            return res.data        
    } 
    catch (e) {
            throw new InternalServiceError()
        }
    }
