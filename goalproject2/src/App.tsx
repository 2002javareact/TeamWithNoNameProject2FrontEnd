import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { store } from './Store';
import { Provider } from 'react-redux';
import  HomepageComponent  from './Components/Homepage/HomepageContainer';
import  UpdateUserComponent  from './Components/UpdateUser/UpdateUserContainer';
import  UsersByIdComponent  from './Components/UsersById/FindUserByIdContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export class App extends React.Component<any,any> {
 
  render() { 
     return ( 
      <Provider store = {store}>    
        <div className="App">
          <Router> 
            <Switch>    
              <Route path = '/' component ={HomepageComponent}/>
              <Route path = '/update/user' component = {UpdateUserComponent}/> 
              <Route path = '/users/id' component ={UsersByIdComponent}/> 
            </Switch>
          </Router>          
        </div>
    </Provider>  
  );
}
}
export default App;
