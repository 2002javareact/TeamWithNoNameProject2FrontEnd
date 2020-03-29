import { Users } from "../Models/Users"
import React from "react"
import { Table } from "reactstrap"
import { Link, Redirect } from "react-router-dom"

interface IViewAllUsersProps {
    loggedUser:Users    
    allUsers:Users[]
    errorMessage:string
    getAllUsersActionMapper: ()=>void
}


export class ViewAllUsersComponent extends React.Component<IViewAllUsersProps,any>{

    // runs when component starts to exist
    componentDidMount(){
            if(this.props.loggedUser.username === ''){
                return(
                    <Redirect to ="/homepage"/>
                )
            }else if(this.props.loggedUser.role.roleId === 2){     
            return (
                this.props.getAllUsersActionMapper()
            )
            }
            else{}
    }

    render(){

        var divStyle = {
            background: "white",
            //padding: "20px",
            margin: "20px"            
          };


        let userDisplay = this.props.allUsers.map((person)=>{
        return (
                <tr>          
                <td>{person.userId}</td>
                <td>{person.username}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.email}</td>
                <td>{person.role.roleId}</td>
                <td>{person.role.roleName}</td>

                <td><Link to={{pathname:`/user`}}>update</Link> </td>
                <td>delete </td>
                <td><Link to={{ pathname: `/user-delete/${person.userId}`, state: { userid: `${person.userId}` } }}>delete</Link> </td>
             
              </tr>
        )})

        return(           
        <>

<div  style={divStyle} >
                <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>id</th>
                <th>username</th>                
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>roleId</th>
                <th>roleName</th>
                <th>Action </th>
                <th>Action </th>
                </tr>
            </thead>
            <tbody>
            {userDisplay}    
        </tbody>
        </Table>

        <Link to="/loggedInPage">Back to Homepage</Link>
        </div>
      </> 
        )
}//end of render
}//end of class