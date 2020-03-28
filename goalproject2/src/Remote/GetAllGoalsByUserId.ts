import { Project2Client } from "./Project2Client"
import { InternalServiceError } from "../Components/Errors/InternalServiceError"


export const getAllGoalsByUserId = async (id:number)=> {

    try {
        let allGoals = await Project2Client.get(`/goals/user/${id}`)

        if(allGoals.status ===400){
            throw new InternalServiceError()
        }

        return allGoals.data
    } catch (e) {
        throw new InternalServiceError()
    }
}