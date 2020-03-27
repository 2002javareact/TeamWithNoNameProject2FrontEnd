  
import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'
import { Users } from '../Models/Users'
import { Redirect } from 'react-router'

interface IUserInfoProps{
    loggedUser:Users
}

export class UserInfoComponent extends React.Component<IUserInfoProps,any>{


    render(){
        return(
            this.props.loggedUser.username !== ''? 
            <Card>
                <CardTitle>{this.props.loggedUser.firstName} {this.props.loggedUser.lastName}</CardTitle>
                <CardText>{`Username: ${this.props.loggedUser.username}`}</CardText>
                <CardText>{`Role: ${this.props.loggedUser.role.roleName}`}</CardText>
                <CardText>{`Email: ${this.props.loggedUser.email}`}</CardText>
            </Card>
            :
            <Redirect to='/homepage'/>
        )
    }
}