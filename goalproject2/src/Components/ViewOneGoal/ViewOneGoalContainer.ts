import { IState } from "../../Reducers";
import { getOneGoalActionMapper} from "../../ActionMapper/GetOneGoalActionMapper"
import { connect } from "react-redux";
import { ViewOneGoalComponent } from "./ViewOneGoalComponent";


const mapStatetoProps = (state: IState) => {

    return {
        currentGoal: state.allGoals.currentGoal,
        currentGoalId: state.allGoals.currentGoalId
    }
}

const mapDispatchToProps = {
    getOneGoalActionMapper
}

export default connect(mapStatetoProps,mapDispatchToProps)(ViewOneGoalComponent)