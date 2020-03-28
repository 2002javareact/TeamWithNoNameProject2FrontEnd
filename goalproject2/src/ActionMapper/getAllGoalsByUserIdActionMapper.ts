import {Dispatch} from "redux"
import { getAllGoalsByUserId } from "../Remote/GetAllGoalsByUserId"
import { Goal } from "../Components/Models/Goals"

export const goalTypes = {
    GET_ALL_GOALS: "RERIEVED_ALL_GOALS",
    FAILED_TO_GET_ALL_GOALS: "FAILED_TO_RERIEVED_ALL_GOALS"
}

export const getAllGoalsByUserIdActionMapper = (id:number) => async (dispatch:Dispatch) =>{

try {
    let allGoals:Goal[] = await getAllGoalsByUserId(id)

    dispatch({
        type: goalTypes.GET_ALL_GOALS,
        payload:{
            allGoals
        }
    })
} catch (e) {
    dispatch({
        type: goalTypes.FAILED_TO_GET_ALL_GOALS
    })
}

}