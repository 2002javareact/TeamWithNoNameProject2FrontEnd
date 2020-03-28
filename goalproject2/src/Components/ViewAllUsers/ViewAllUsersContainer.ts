import { IState } from "../../Reducers"
import { ViewAllUsersComponent } from "./ViewAllUsersComponent"
import { getAllUsersActionMapper } from "../../ActionMapper/ViewAllUsersActionMapper"
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
    return {
        allUsers: state.allUsers.allUsers,
        loggedUser: state.loggedUser.loggedUser,
        errorMessage: state.allUsers.errorMessage        
    }
}

const mapDispatchToProps = {
    getAllUsersActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllUsersComponent)