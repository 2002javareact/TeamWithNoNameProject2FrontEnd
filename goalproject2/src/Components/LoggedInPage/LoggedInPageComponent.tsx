import React, { SyntheticEvent } from "react"
import { Users } from "../Models/Users"
import { IState } from "../../Reducers"
import { connect } from "react-redux"
import { Button, Container, Form } from "reactstrap"
import { Redirect } from "react-router"
import  UserInfoComponent  from "../UserInfo/UserInfoContainer"

interface ILoggedInProps{
    loggedUser:Users
}
export class LoggedInPageComponent extends React.Component<ILoggedInProps,any>{
   
    buttonClick = (e: SyntheticEvent)=>{
        e.preventDefault()
        return (<Redirect to = '/users'/>)
    }

    render(){
        if(this.props.loggedUser.username === ""){
            return(
                <Redirect to = '/homepage'/>
            )
        }
        else{
        return(
            <>      
                    <Form onSubmit = {this.buttonClick} className="viewAllUsersButton">
                    <Button  >View All Users</Button>
                    </Form>
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

 