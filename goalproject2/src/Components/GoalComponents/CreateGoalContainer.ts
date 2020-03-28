import { IState } from "../../Reducers";
import { CreateGoalActionMapper } from "../../ActionMapper/CreateGoalActionMapper";
import { connect } from "react-redux";
import { CreateGoalComponent } from "./CreateGoalComponent";

const mapStateToProps = (state: IState) => {
	return {
		createdGoal: state.createdGoal.createdGoal,
		currentUser: state.loggedUser.loggedUser
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
