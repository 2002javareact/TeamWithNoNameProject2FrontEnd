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

export class App extends React.Component<any,any> {
 
  render() { 
     return ( 
      <Provider store = {store}>    
        <div className="App">
          <Router> 
            <Switch>   
            <Route path = '/homepage' component ={HomepageComponent}/> 
            <Route path = '/users/info' component={UserInfoComponent}/>
            <Route path = '/update/user' component = {UpdateUserComponent}/> 
            <Route path = '/users/id' component ={UsersByIdComponent}/> 
            <Route path = '/users' component = {ViewAllUsersComponent}/> 
            <Route path = '/loggedIn' component = {LoggedInPageComponent}/>
            <Route path = '/Goal'/> 
            </Switch>
          </Router>          
        </div>
    </Provider>  
  );
}
}
export default App;
