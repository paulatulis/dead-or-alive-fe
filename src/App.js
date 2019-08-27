import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
// import Quiz from './views/Quiz'
import Login from './views/Login';
// import SignUp from './views/SignUp';
// import Profile from './views/Profile';
import ErrorCode from './views/ErrorCode';

import './App.css';

class App extends Component {
  state={
    redirect:''
  }
  
  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({ redirect: <Redirect to='/' /> })
  }

  


  render () { 
    return (
      <div className="main-container">
        <div className="grid-container">
        <Navbar handleLogout={this.handleLogout}/>
      {!localStorage.token ? 

        <div>
           <LandingPage />
           <Route exact path='/login' component={Login}/>
           <Route exact path='/sign_up' component={null} />
        </div>

        :

        <Switch>
          <Route exact path='/logout' component={null} />
          <Route exact path='/profile' component={null}/>
          <Route exact path='/quiz' component={null}/>
          <Route render={()=> <ErrorCode code='404 - Not Found'/> } />
        </Switch>
        }
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
