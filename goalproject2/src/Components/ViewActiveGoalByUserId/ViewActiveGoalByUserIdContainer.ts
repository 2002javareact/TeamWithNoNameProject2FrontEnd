import { IState } from "../../Reducers";
import { connect } from "react-redux";
import {getAllGoalsByUserIdActionMapper} from "../../ActionMapper/GetAllGoalsByUserIdActionMapper"
import { ViewActiveGoalsByUserIdComponent } from "./ViewActiveGoalByUserIdComponent";

const mapStateToProps = (state:IState) =>{
    return{
        loggedUser:state.loggedUser.loggedUser,
        allGoals:state.allGoals.allGoals,
        errorMessage:state.allGoals.errorMessage,
        currentGoalId:state.allGoals.currentGoalId
    }
}

const mapDispatchToProps = {
    getAllGoalsByUserIdActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewActiveGoalsByUserIdComponent)