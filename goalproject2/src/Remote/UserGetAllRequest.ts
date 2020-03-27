import { Users } from "../Compoinents/Models/Users"
import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Compoinents/Errors/InternalServiceError"
import { UserNotFoundError } from "../Compoinents/Errors/UserNotFoundError"


export const FetchAllUsers = async ()=>{
    let allUsers = await Project2Client.get('/users')
    if(allUsers.status === 200){
        return allUsers.data
    }
    else if(allUsers.status === 404){
        throw new UserNotFoundError()
    }
    else{
        throw new InternalServiceError()
    }
}


/*
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
 */