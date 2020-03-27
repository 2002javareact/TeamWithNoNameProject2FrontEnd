import { Users } from "../Models/Users"
import React, { SyntheticEvent } from "react"
import { Button, FormGroup, Form, Input, Container, Row, Col } from "reactstrap"
import { Role } from "../Models/Role"
import CNJPG from '../../Assets/image.jpg'
import { Redirect } from "react-router"

export interface ILoginProps{
    loggedUser:Users
    createdUser:Users
    errorMessage1:string
    errorMessage2:string
    LoginActionMapper:(u:string,p:string)=>void
    CreateUserActionMapper:(uid:number,u:string,p:string,fN:string,ln:string,e:string,r:Role)=>void
}

export interface ILoginState {
    loginUsername: string
    loginPassword: string
    username:string
    password:string
    firstName:string
    lastName:string
    email:string
}

export class HomepageComponent extends React.Component<ILoginProps, ILoginState>{
    constructor(props: any) {
        super(props)
        this.state = {
            loginUsername: '',
            loginPassword: '',
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:''
        }
    }


    login = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.LoginActionMapper(this.state.loginUsername, this.state.loginPassword)
        this.setState({
            loginPassword:''
        })
        }

        
    create = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.CreateUserActionMapper(0,this.state.username, this.state.password, this.state.firstName,this.state.lastName,this.state.email,new Role(1,'User'))
        this.setState({
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:''
        })
        }

    updateLoginUsername = (e: any) => {
        this.setState({
            loginUsername: e.currentTarget.value
        })
    }
    updateLoginPassword = (e: any) => {
        this.setState({
            loginPassword: e.currentTarget.value
        })
    }

    updateUsername = (e: any) => {
        this.setState({
            username: e.currentTarget.value
        })
    }
    updatePassword = (e: any) => {
        this.setState({
            password: e.currentTarget.value
        })
    }

    updateFirstName = (e: any) => {
        this.setState({
            firstName: e.currentTarget.value
        })
    }

    updateLastName = (e: any) => {
        this.setState({
            lastName: e.currentTarget.value
        })
    }

    updateEmail = (e: any) => {
        this.setState({
            email: e.currentTarget.value
        })
    }

    render() {
        return (     
            this.props.loggedUser.username === ""?      
            <>       
                    
                <Container>
                <br></br>
                <Row xs="3">
                    <Col>
                        <div className ="info">
                            <img src={CNJPG}/>
                            <h4>Keep Track of your Goals</h4>
                            <h6>Whether you want to loose weight or save money, use our service to keep track of it all.</h6>
                            <h6>Create your own goals or choose one from our templates, choose how long you want to take to succeed.</h6>
                        </div> 
                    </Col>

                    <Col>
                        <Form onSubmit={this.login} className = "login">
                            <h2>Sign In</h2>
                                <FormGroup>
                                <Input onChange={this.updateLoginUsername} value={this.state.loginUsername} type="text" placeholder="username" required />
                                </FormGroup>
                            
                                <FormGroup>
                                <Input onChange={this.updateLoginPassword} value={this.state.loginPassword} type="password"  placeholder="password" required />
                                </FormGroup>
                                <Button>Log In</Button>
                        </Form>
                            <p>{this.props.errorMessage1}</p>
                    </Col>
                    
                    <Col>              
                    <Form onSubmit={this.create} className = "create">
                                <h2>Sign Up</h2>
                                <FormGroup>
                                    <Input onChange={this.updateUsername} value={this.state.username} type="text" placeholder="username" required />
                                </FormGroup>
                            
                                <FormGroup>
                                    <Input onChange={this.updatePassword} value={this.state.password} type="password" placeholder="password" required />
                                </FormGroup>

                                <FormGroup>
                                    <Input onChange={this.updateFirstName} value={this.state.firstName} type="text" placeholder="first name" required />
                                </FormGroup>
                            
                                <FormGroup>
                                    <Input onChange={this.updateLastName} value={this.state.lastName} type="text" placeholder="last name" required />
                                </FormGroup>

                                <FormGroup>
                                    <Input onChange={this.updateEmail} value={this.state.email} type="text" placeholder="email" required />
                                </FormGroup>
                                <Button>Sign Up</Button>
                    </Form>
                        <p>{this.props.errorMessage2}</p>
                    </Col>
                </Row>
                </Container>
            </>
            :
            <Redirect to ='/loggedIn'/>

        )
    }
}