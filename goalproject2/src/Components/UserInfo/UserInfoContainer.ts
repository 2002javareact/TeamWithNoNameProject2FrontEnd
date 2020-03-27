  
import { connect } from "react-redux";
import { UserInfoComponent } from "./UserInfo";
import { IState } from "../../Reducers";

const mapStateToProps = (state:IState) => {
    return {
        loggedUser:state.loggedUser.loggedUser
    }
}
export default connect(mapStateToProps)(UserInfoComponent)