import { IState } from "../../Reducers"
import { UpdateUserActionMapper } from "../../ActionMapper/UpdateUserActionMapper"
import { connect } from "react-redux"
import { UpdateUserComponent } from "./UpdateUserComponent"



const mapStateToProps = (state:IState) =>{
    return {
        loggedUser:state.loggedUser.loggedUser,
        errorMessage1:state.loggedUser.errorMessage,
        updatedUser:state.updateUser.updatedUser,
        errorMessage:state.updateUser.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    UpdateUserActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserComponent)