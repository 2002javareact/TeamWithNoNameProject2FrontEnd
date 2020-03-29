import React from "react"
import { Table } from "reactstrap"
import { Users } from "../Models/Users"
import { Goal } from "../Models/Goals"
import { Link } from "react-router-dom"
import { getOneGoalActionMapper } from "../../ActionMapper/GetOneGoalActionMapper"

interface IViewActiveGoalsByUserIdPros {
    loggedUser: Users
    allGoals: Goal[]
    getAllGoalsByUserIdActionMapper: (userId: number) => void
    getOneGoalActionMapper:(id:number) => void
    oneGoal:Goal    
}


export class ViewActiveGoalsByUserIdComponent extends React.Component<IViewActiveGoalsByUserIdPros, any> {

        componentDidMount() {
            if (this.props.allGoals.length !== 0) {
    
    
            } else {
                this.props.getAllGoalsByUserIdActionMapper(this.props.loggedUser.userId)
            }
        }

    redirectToGoalPage(goalId: number) {
        this.props.getOneGoalActionMapper(goalId)
    }

    render() {

        let displayGoalname = this.props.allGoals.map((element) => {
            return (
                <tr>
                    <th scope="row" onClick={() => this.redirectToGoalPage(element.goalId)}><Link to={`/goal/`}>{element.name} </Link></th>
                </tr>)
        });

        return (
            this.props.allGoals.length > 0 ?
                <>
                    <Table dark>
                        <thead>
                            <tr>
                                <th>Goal Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayGoalname}
                        </tbody>
                    </Table>
                    <Link to="/create">Create New Goal</Link>
                </>
                :
                <>
                    <Link to="/create">Create New Goal</Link>
                </>

        )
    }
}