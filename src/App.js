import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom'
import Navbar from './Components/NavBar';
import MainPage from './Components/MainPage'
import EditContact from './Components/EditContact'
import SignIn from './Components/SignIn'
import CreateContact from './Components/CreateContact'
class App extends Component {
  render(){
      return (
        <BrowserRouter>
        <div className="App">
          <Navbar/>
        <Switch>
          <Route exact path='/' component ={MainPage} />
          <Route path='/editcontact/:id' component={EditContact} />
          <Route path='/SignIn' component={SignIn}/>
          <Route path='/create' component={CreateContact}/>
        </Switch>
        </div>
    </BrowserRouter>
      )
}
}
export default App;
