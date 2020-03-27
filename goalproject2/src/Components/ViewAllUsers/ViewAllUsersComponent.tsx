import { UserInfoComponent }  from "../UserInfo/UserInfo"
import { Users } from "../Models/Users"
import React from "react"
import { Container, CardDeck } from "reactstrap"
import { Redirect } from "react-router"

interface IViewAllUsersProps {
    loggedUser:Users    
    allUsers:Users[]
    errorMessage:string
    getAllUsersActionMapper: ()=>void
}


export class ViewAllUsersComponent extends React.Component<IViewAllUsersProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        // check to see if we already have users (redux store)
        if(this.props.allUsers.length !== 0){
            //return
            //make sure they are admin
        }else if(this.props.loggedUser.role.roleId === 1){            
            this.props.getAllUsersActionMapper()
        }else {
            //they weren't admin so do nothing
            //return
        }
    }

    render(){
        //turn array of users into display components
        let userDisplay = this.props.allUsers.map((ele)=>{
            return <UserInfoComponent loggedUser={ele} key={ele.userId}/>
        })
        return(
            this.props.loggedUser.role.roleId === 1?
            <>
            <Container>
                <CardDeck elementsPerRow={4}>
                    {userDisplay}
                </CardDeck>
            </Container>
            <p>{this.props.errorMessage}</p>
            </>
            :
            <Redirect to='/'/>
        )
    }
}