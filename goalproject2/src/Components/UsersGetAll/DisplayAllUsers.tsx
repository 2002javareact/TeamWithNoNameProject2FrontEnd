import React from 'react'
import { Users } from '../Models/Users';
import { UserInfoComponent } from '../UserInfo/UserInfo';
import { Redirect } from 'react-router';
import { Container } from 'reactstrap';
import { Table} from 'reactstrap'
import {Link} from 'react-router-dom'

interface IViewAllUsersProps {
    currentUser:Users
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
        }else if(this.props.currentUser.role.roleId <= 2){            
            this.props.getAllUsersActionMapper()
        }else {
            //they weren't admin so do nothing
            //return
        }
    }

    render(){

        //turn array of users into display components
        /*
        let userDisplay = this.props.allUsers.map((ele)=>{
            return <UserInfoComponent currentUser={ele} key={ele.userId}/>
        })
*/
        return(

           
            this.props.currentUser.username === '' || this.props.currentUser.role.roleId !== 1 ?
            <Redirect to = '/'/>
            :
            <>
    

<h1> All Users Info</h1> <br/>
  <h4> Your role is {this.props.currentUser.role.role}</h4>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>id</th>
      <th>username</th>
      <th>password</th>
      <th>firstname</th>
      <th>lastname</th>
      <th>email</th>
      <th>roleId</th>
      <th>roleName</th>
      <th>Action </th>
    </tr>
  </thead>
  <tbody>


  {
this.state.users.map(  (person:Users) => 
   (
     
      
  
        <tr>
          
        <td><Link to={{pathname:`/users/${person.userId}`, state: { uid: `${person.userId}`}   }}>{person.userId}</Link></td>
        <td>{person.username}</td>
        <td>ANY</td>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.email}</td>
        <td>{person.role.roleId}</td>
        <td>{person.role.role}</td>
        <td><Link to={{pathname:`/users/${person.userId}`, state: { uid: `${person.userId}`}   }}>update</Link> </td>
      </tr>
   )
                    )
}



   
   
   
  </tbody>
</Table>




            <p>{this.props.errorMessage}</p>
            </>


        ) //render
    }
}