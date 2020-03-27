import { Users } from "../Components/Models/Users"
import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Components/Errors/InternalServiceError"
<<<<<<< HEAD

export async function UserGetAllRequest():Promise<Users>
 {
    
    try {
        let res = await Project2Client.get("/users")
        
            return res.data        
    } 
    catch (e) {
            throw new InternalServiceError()
        }
 }
=======
import { UserNotFoundError } from "../Components/Errors/UserNotFoundError"
import { TokenExpiredError } from "../Components/Errors/TokenExpiredError";


export const FetchAllUsers = async ()=>{

    try{
    let allUsers = await Project2Client.get('/users')

    if(allUsers.status === 400){
        throw new TokenExpiredError()
    }

    return allUsers.data

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

}
>>>>>>> 6855bf349eb7f9563abf5453fea7c8ce90bd4b51
