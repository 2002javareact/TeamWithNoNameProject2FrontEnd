import React from "react"
import { Goal } from "../Models/Goals"
import { Table } from "reactstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { IState } from "../../Reducers"

interface IViewOneGoal {
    currentGoal: Goal
}



export class ViewOneGoalComponent extends React.Component<IViewOneGoal, any>{

    render() {
        console.log(this.props.currentGoal.goalId)
        let displayGoal
        if (this.props.currentGoal.goalId > 0) {
            if (this.props.currentGoal.successful === true) {
                displayGoal = (
                    <tr>
                        <th scope="row">{this.props.currentGoal.goalId}</th>
                        <td>{this.props.currentGoal.name}</td>
                        <td>{this.props.currentGoal.description}</td>
                        <td>{this.props.currentGoal.startDate}</td>
                        <td>{this.props.currentGoal.goalLength}</td>
                        <td>Complete</td>
                        <td><Link to='/update'>Update?</Link></td>
                    </tr>
                )
            } else {
                displayGoal = (
                    <tr>
                        <th scope="row">{this.props.currentGoal.goalId}</th>
                        <td>{this.props.currentGoal.name}</td>
                        <td>{this.props.currentGoal.description}</td>
                        <td>{this.props.currentGoal.startDate}</td>
                        <td>{this.props.currentGoal.goalLength}</td>
                        <td>Not Complete</td>
                        <td><Link to='/update'>Update?</Link></td>
                    </tr>
                )
            }
        } else {
            displayGoal = (
                <tr>
                    <th scope="row">There</th>
                    <td>Has</td>
                    <td>Been</td>
                    <td>A</td>
                    <td>Mistake</td>
                    <td>YES!</td>
                    <td>Definitly</td>
                </tr>
            )
        }

        return (
            <>
                <Link to="/homepage">Go Home</Link>
                <br/>
                <br/>
                <Table dark>
                    <thead>
                        <tr>
                            <th>Goal ID</th>
                            <th>Goal Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>Time in Weeks</th>
                            <th>Completed?</th>
                            <th>Update?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayGoal}
                    </tbody>

                </Table>
            </>
        )
    }


}

const mapStatetoProps = (state: IState) => {

    return {
        currentGoal: state.oneGoal.oneGoal,
    }
}

export default connect(mapStatetoProps)(ViewOneGoalComponent)