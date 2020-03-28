import { IState } from "../../Reducers";
import { UpdateGoalActionMapper } from "../../ActionMapper/UpdateGoalActionMapper";
import { connect } from "react-redux";
import { UpdateGoalComponent } from "./UpdateGoalComponent";

const mapStateToProps = (state: IState) => {
	return {
		loggedUser: state.loggedUser.loggedUser,
		errorMessage1: state.loggedUser.errorMessage,
		updatedGoal: state.updatedGoal.updatedGoal,
		errorMessage: state.updateUser.errorMessage
	};
};

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
	//that contains functions that can send actions
	UpdateGoalActionMapper
};

//connect is Higher order Component that wraps our component
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UpdateGoalComponent);
