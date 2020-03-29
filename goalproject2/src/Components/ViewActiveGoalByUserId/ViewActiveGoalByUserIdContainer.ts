import { IState } from "../../Reducers";
import { connect } from "react-redux";
import {getAllGoalsByUserIdActionMapper} from "../../ActionMapper/GetAllGoalsByUserIdActionMapper"
import { ViewActiveGoalsByUserIdComponent } from "./ViewActiveGoalByUserIdComponent";
import { getOneGoalActionMapper } from "../../ActionMapper/GetOneGoalActionMapper"

const mapStateToProps = (state:IState) =>{
    return{
        loggedUser:state.loggedUser.loggedUser,
        allGoals:state.allGoals.allGoals,
        oneGoal:state.oneGoal.oneGoal,
        errorMessage:state.allGoals.errorMessage
    }
}

const mapDispatchToProps = {
    getAllGoalsByUserIdActionMapper,
    getOneGoalActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewActiveGoalsByUserIdComponent)