import { Users } from "../Models/Users"
import { IState } from "../../Reducers"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import  UserInfoComponent  from "../UserInfo/UserInfoContainer"
import  ViewActiveGoalsByUserIdComponent  from "../ViewActiveGoalByUserId/ViewActiveGoalByUserIdContainer"
import { Goal } from "../Models/Goals"
import { Link } from "react-router-dom"
import React from "react"
import { Container } from "reactstrap"

interface ILoggedInProps{
    loggedUser:Users,
    allGoals:Goal[]
}
export class LoggedInPageComponent extends React.Component<ILoggedInProps,any>{
   
  

    render(){
        if(this.props.loggedUser.username === ""){
            return(
                <Redirect to = '/homepage'/>
            )
        }
        else if (this.props.loggedUser.role.roleId === 2){
        return(
            <>      
                <Link to="/all">View all Users</Link>
                <Container>
                <UserInfoComponent/>
                </Container>
                <ViewActiveGoalsByUserIdComponent/>
                <br/>
                <Link to ="/update">Update Goal</Link>
            </> 
        )
        }
        else{
            return(
            <>    
                <Container>
                <UserInfoComponent/>
                </Container>
                <ViewActiveGoalsByUserIdComponent/>
                <br/>
                <Link to ="/update">Update Goal</Link>
            </>
            )
        }
    }
}

const mapStateToProps = (state:IState) =>{
    return {
        loggedUser:state.loggedUser.loggedUser,
        allGoals:state.allGoals.allGoals,
        errorMessage:state.loggedUser.errorMessage
    }
  }  
  export default connect(mapStateToProps)(LoggedInPageComponent)
