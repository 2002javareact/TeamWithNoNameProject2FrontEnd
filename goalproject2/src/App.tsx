import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { store } from './Store';
import { Provider } from 'react-redux';
import  HomepageComponent  from './Compoinents/Homepage/HomepageContainer';

export class App extends React.Component<any,any> {
 
  render() { 
     return ( 
      <Provider store = {store}>    
        <div className="App">     
            <HomepageComponent/>
        </div>
    </Provider>  
  );
}
}
export default App;
