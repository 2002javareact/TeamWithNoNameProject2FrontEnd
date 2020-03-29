import { Project2Client } from "./Project2Client"
import { UserNotFoundError } from "../Components/Errors/UserNotFoundError"
import { InternalServiceError } from "../Components/Errors/InternalServiceError"

export const getOneGoal = async (id:number) => {

    try {
        let oneGoal = await Project2Client.get(`/goals/${id}`)
        if (oneGoal.status === 404){
            throw new UserNotFoundError()
        }

        return oneGoal.data
    } catch (e) {
        if(e.status === 404){
            throw new UserNotFoundError()
        }
        else{
        throw new InternalServiceError()
        }
    }
}