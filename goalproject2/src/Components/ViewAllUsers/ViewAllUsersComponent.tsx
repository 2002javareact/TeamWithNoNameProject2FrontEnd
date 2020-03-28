import { Users } from "../Models/Users"
import React from "react"
import { Table } from "reactstrap"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"

interface IViewAllUsersProps {
    loggedUser:Users    
    allUsers:Users[]
    errorMessage:string
    getAllUsersActionMapper: ()=>void
}


export class ViewAllUsersComponent extends React.Component<IViewAllUsersProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        if(this.props.allUsers.length !== 0){
            //return
            //make sure they are admin
        }else if(this.props.loggedUser.role.roleId === 2){            
            this.props.getAllUsersActionMapper()
        }else {
            //they weren't admin so do nothing
            //return
        }
    }

    render(){
        let userDisplay = this.props.allUsers.map((person)=>{
        return (
                <tr>          
                <td><Link to={{pathname:`/users/${person.userId}`, state: { uid: `${person.userId}`}   }}>{person.userId}</Link></td>
                <td>{person.username}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.email}</td>
                <td>{person.role.roleId}</td>
                <td>{person.role.roleName}</td>
                <td><Link to={{pathname:`/users/${person.userId}`, state: { uid: `${person.userId}`}   }}>update</Link> </td>
              </tr>
        )})

        return(           
        <>
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
            {userDisplay}    
        </tbody>
        </Table>
      </> 
        )
}//end of render
}//end of class