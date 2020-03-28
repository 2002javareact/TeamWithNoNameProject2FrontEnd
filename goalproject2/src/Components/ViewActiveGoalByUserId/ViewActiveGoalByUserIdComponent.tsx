import React from "react"
import { Table } from "reactstrap"
import { Users } from "../Models/Users"
import { Goal } from "../Models/Goals"
import { Redirect } from "react-router"

interface IViewActiveGoalsByUserIdPros {
    loggedUser: Users
    allGoals: Goal[]
    getAllGoalsByUserIdActionMapper: (userId:number) => void
    //currentGoalId: number
}



export class ViewActiveGoalsByUserIdComponent extends React.Component<IViewActiveGoalsByUserIdPros, any> {

    componentDidMount() {
        if (this.props.allGoals.length !== 0) {

        } else {
            this.props.getAllGoalsByUserIdActionMapper(this.props.loggedUser.userId)
        }
    }

     redirectToGoalPage(goalId:number){
         this.setState({
             currentGoalId: goalId
         })
     return <Redirect to='/goal'/>
     }

    render() {
        
        let i= 1
        let displayGoalname = this.props.allGoals.map((element) => {
            return( 
            <tr>
                <th scope="row">{i++}</th>
                <td>{element.name}</td>
            
            { <td onClick={()=>this.redirectToGoalPage(element.goalId)}>{element.name}</td>}
            </tr> )
        });

        return (
            this.props.allGoals.length > 0 ?
        <>
                <Table>
                    <thead>
                        <tr>
                            <th>Goal Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayGoalname}
                    </tbody>
                </Table>
            </>
        :
<>

</>
        )
    }
}