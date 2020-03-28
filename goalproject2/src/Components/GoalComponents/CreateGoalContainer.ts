import { IState } from "../../Reducers";
import { CreateGoalActionMapper } from "../../ActionMapper/CreateGoalActionMapper";
import { CreateGoalComponent } from "./CreateGoalComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => {
	return {
		createdGoal: state.createdGoal.createdGoal,
		loggedUser: state.loggedUser.loggedUser,
		errorMessage: state.createdGoal.errorMessage
	};
};

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
	//that contains functions that can send actions
	CreateGoalActionMapper
};

//connect is Higher order Component that wraps our component
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateGoalComponent);
