import React, { SyntheticEvent } from "react"
import { Users } from "../Models/Users"
import { IState } from "../../Reducers"
import { connect } from "react-redux"
import { Button, Container, Form } from "reactstrap"
import { Redirect } from "react-router"
import  UserInfoComponent  from "../UserInfo/UserInfoContainer"
import  ViewActiveGoalsByUserIdComponent  from "../ViewActiveGoalByUserId/ViewActiveGoalByUserIdContainer"
import { Goal } from "../Models/Goals"

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
        else{
        return(
            <>      
                    <Form onsubmit = "buttonClick()" className="viewAllUsersButton">
                    <Button>View All Users</Button>
                    </Form>
                    <Container>
                    <UserInfoComponent/>
                    </Container>
                    <ViewActiveGoalsByUserIdComponent allGoals={[]}/>
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

  export function buttonClick(e: SyntheticEvent){
    e.preventDefault()
    return (<Redirect to = '/all'/>)
    }