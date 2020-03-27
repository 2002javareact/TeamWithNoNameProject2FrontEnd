import { Project2Client } from "./Project2Client"
import { TokenExpiredError } from "../Components/Errors/TokenExpiredError"
import { InternalServiceError } from "../Components/Errors/InternalServiceError"




export async function UpdateUserRequest(userId:number,username: string, password: string,firstName:string,lastName:string,email:string){
    
    try {
        let res = await Project2Client.patch('/users',{userId,username,password,firstName,lastName,email})
        
        if(res.status === 400){
            throw new TokenExpiredError()
        }else if(res.status === 200){
            console.log('Successful Update')
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