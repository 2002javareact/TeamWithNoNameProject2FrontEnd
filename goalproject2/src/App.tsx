import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { store } from './Store';
import { Provider } from 'react-redux';
import  HomepageComponent  from './Components/Homepage/HomepageContainer';
import  UpdateUserComponent  from './Components/UpdateUser/UpdateUserContainer';
import  UsersByIdComponent  from './Components/UsersById/FindUserByIdContainer';
import  ViewAllUsersComponent  from './Components/ViewAllUsers/ViewAllUsersContainer';
import  LoggedInPageComponent  from './Components/LoggedInPage/LoggedInPageComponent';
import  UserInfoComponent  from './Components/UserInfo/UserInfoContainer';
import  ViewActiveGoalsByUserIdComponent  from './Components/ViewActiveGoalByUserId/ViewActiveGoalByUserIdContainer';
import  CreateGoalComponent  from './Components/GoalComponents/CreateGoalContainer';
import  UpdateGoalComponent  from './Components/UpdateGoalComponents/UpdateGoalContainer';
import  ViewOneGoalComponent  from './Components/ViewOneGoal/ViewOneGoalComponent';
import  {DeleteUserByIdComponent} from './Components/DeleteUser/DeleteUsersByIdComponent';


export class App extends React.Component<any,any> {
 
  render() { 
     return ( 
      <Provider store = {store}>    
        <div className="App">
          <Router> 
            <Switch>   
            <Route path = '/homepage' component ={HomepageComponent}/> 
            <Route path = '/info' component={UserInfoComponent}/>            
            <Route exact path="/user" render={props => <UpdateUserComponent {...props.match.params} />} />
            <Route exact path="/user-delete/:uId" render={props => <DeleteUserByIdComponent {...props.match.params} />} />
            <Route path = '/id' component ={UsersByIdComponent}/> 
            <Route path = '/all' component = {ViewAllUsersComponent}/> 
            <Route path = '/loggedIn' component = {LoggedInPageComponent}/>
            <Route path = '/goals' component = {ViewActiveGoalsByUserIdComponent}/>
            <Route path = '/create' component = {CreateGoalComponent}/> 
            <Route path = '/update' component = {UpdateGoalComponent}/>
            <Route path = '/goal/' component = {ViewOneGoalComponent}/>
            <Route path = '/' component ={HomepageComponent}/>
            </Switch>
          </Router>          
        </div>
    </Provider>  
  );
}
}
export default App;
