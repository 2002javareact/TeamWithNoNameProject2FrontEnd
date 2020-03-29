import { IState } from "../../Reducers"
import { UserDeleteByIdActionMapper } from "../../ActionMapper/UserDeleteById"
import { connect } from "react-redux"
import { DeleteUserByIdComponent} from "./DeleteUsersByIdComponent"
const mapStateToProps = (state:IState) =>{
    return {
        loggedUser:state.loggedUser.loggedUser,
        errorMessage1:state.loggedUser.errorMessage,
        deletedUser:state.deleteUser,
        errorMessage:state.updateUser.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    UserDeleteByIdActionMapper
    
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(DeleteUserByIdComponent)