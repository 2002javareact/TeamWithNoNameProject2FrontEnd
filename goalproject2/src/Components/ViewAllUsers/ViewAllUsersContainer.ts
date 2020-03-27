import { IState } from "../../Reducers"
import { ViewAllUsersComponent } from "./ViewAllUsersComponent"
import { getAllUsersActionMapper } from "../../ActionMapper/ViewAllUsersActionMapper"
import { connect } from "react-redux"

const mapStateToProps = (state:IState) => {
    return {
        allUsers: state.allUsers.allUsers,
        errorMessage: state.allUsers.errorMessage,
        currentUser: state.loggedUser.loggedUser
    }
}

const mapDispatchToProps = {
    getAllUsersActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllUsersComponent)