import React from "react"
import { Users } from "../Models/Users"
import { IState } from "../../Reducers"
import { connect } from "react-redux"
import { Card, CardTitle, CardText, Button, Container } from "reactstrap"
import { Redirect } from "react-router"
import  UserInfoComponent  from "../UserInfo/UserInfoContainer"
import ViewAllUsersComponent  from "../ViewAllUsers/ViewAllUsersContainer"

interface ILoggedInProps{
    loggedUser:Users
}
export class LoggedInPageComponent extends React.Component<ILoggedInProps,any>{
   
    render(){
        if(this.props.loggedUser.username === ""){
            return(
                <Redirect to = '/homepage'/>
            )
        }
        else{
        return(
            <>  
                    <Button className = "viewUsersButton">View All Users</Button>
                    <Container>
                    <UserInfoComponent/>
                    </Container>
            </> 
        )
        }
    }
}

const mapStateToProps = (state:IState) =>{
    return {
        loggedUser:state.loggedUser.loggedUser,
        errorMessage:state.loggedUser.errorMessage
    }
  }  
  export default connect(mapStateToProps)(LoggedInPageComponent)

  export function buttonClick (){
      return <Redirect to = '/users'/>
  }