import { Users } from "../Components/Models/Users"
import { BadCredentialsError } from "../Components/Errors/BadCredentialsError"
import { InternalServiceError } from "../Components/Errors/InternalServiceError"
import { Project2Client } from "./Project2Client"

export async function LoginRequest(username: string, password: string):Promise<Users> {
    let credentials = {
        username,
        password
    }

    try {
        let res = await Project2Client.post("/users/login",credentials)
        if(res.data === ""){
            throw new BadCredentialsError()
        }        
            return res.data        
    } 
    catch (e) {
        if(e.status === 400){
            throw e
        } 
        else{
            throw new InternalServiceError()
        }
    }
}