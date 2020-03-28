import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Components/Errors/InternalServiceError"
import { UserNotFoundError } from "../Components/Errors/UserNotFoundError"


export const getAllGoalsByUserId = async (id:number)=> {

    try {
        let allGoals = await Project2Client.get(`/goals/user/${id}`)

        if(allGoals.status === 404){
            throw new UserNotFoundError()
        }

        return allGoals.data
    } catch (e) {
        if(e.status === 404){
            throw new UserNotFoundError()
        }
        else{
        throw new InternalServiceError()
        }
    }
}