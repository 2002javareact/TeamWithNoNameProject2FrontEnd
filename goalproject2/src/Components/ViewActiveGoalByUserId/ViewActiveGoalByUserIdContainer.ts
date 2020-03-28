import { IState } from "../../Reducers";
import { connect } from "react-redux";
import {getAllGoalsByUserIdActionMapper} from "../../ActionMapper/getAllGoalsByUserIdActionMapper"
import { ViewActiveGoalsByUserIdComponent } from "./ViewActiveGoalByUserIdComponent";

const mapStateToProps = (state:IState) =>{
    return{
        currentUser:state.loggedUser.loggedUser
    }
}

const mapDispatchToProps = {
    getAllGoalsByUserIdActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewActiveGoalsByUserIdComponent)