import React, { SyntheticEvent } from 'react';
import { Users } from '../Models/Users';
import { FormGroup, Label, Col, Input, Button, Card, CardText, CardTitle } from 'reactstrap';
import { Redirect } from 'react-router';
import PropTypes  from 'react'

interface IDeleteUserProps
{
    deleteUser: Users;
	loggedUser: Users;
    UserDeleteByIdActionMapper:(userId:number)=>void;
    errorMessage: string;
    uId:number
}

interface IDeleteUserState
{
    userId:number
}

export class DeleteUserByIdComponent extends React.Component<IDeleteUserProps,IDeleteUserState>{
   constructor(props:any){
   super(props)
   this.state = ({  
          userId:0       
    
    })    // Error
}
    componentDidMount ()
    {

        console.log("Hello world!")
        console.log(this.props.uId)
        console.log("notHello world!")

   const uId =  this.props.uId
  this.setState({userId:uId})
    
      return this.props.UserDeleteByIdActionMapper(this.props.uId)
     
     
    }



render(){
    // when delete it return to all users component
    return(
              
          <Redirect to ='/all'/>
      
    )
}

}//end of class



/*

render(){
    
    return(
        this.props.currentUser.username === ''?
        <Redirect to ='/'/>
        :
        <>           
          <Redirect to ='/all'/>
        </>
    )
}

}//end of class

*/