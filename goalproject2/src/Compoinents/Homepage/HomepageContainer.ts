import { IState } from "../../Reducers";
import { connect } from "react-redux";
import { LoginActionMapper } from '../../ActionMapper/LoginActionMapper'
import { CreateUserActionMapper } from '../../ActionMapper/CreateUserActionMapper'
import { HomepageComponent } from "./HomepageComponent";

// this is the file to connects login Component to redux
// we define to config objects
// the first attachs data to Login Comp
// the second attachs action mappers to Login Comp

// this is how we choose what data to pass into a component
const mapStateToProps = (state:IState) =>{
    return {
        loggedUser:state.loggedUser.loggedUser,
        errorMessage1:state.loggedUser.errorMessage,
        createdUser:state.createdUser.createdUser,
        errorMessage2:state.createdUser.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    LoginActionMapper,
    CreateUserActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(HomepageComponent)