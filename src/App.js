import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
// import Quiz from './views/Quiz'
import Login from './views/Login';
import SignUp from './views/SignUp';
import Profile from './views/Profile';
import ErrorCode from './views/ErrorCode';

import './App.css';

class App extends Component {
  state={
    redirect:'', 
    user: {
      username: null,
      img_url: null,
      zombie: false
    }
  }
  
  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({ redirect: <Redirect to='/' /> })
  }

  createZombieStatus = (info) => {
    this.setState({
      user:{
        username: info.user.username,
        img_url: info.user.img_url,
        zombie: false
      }
    })
  }

  setZombieStatus = (info) => {
    this.setState({
      user:{
        username: info.user.username,
        img_url: info.user.img_url,
        zombie: info.user.zombie
      }
    })
  }
  


  render () { 
    // console.log(this.state)
    return (
      <div className="main-container">
        <div className="grid-container">
        {this.state.redirect}
        <Navbar handleLogout={this.handleLogout}/>
      {!localStorage.token ? 

        <div>
           <LandingPage />
           <Route exact path='/login' render={()=> <Login setZombieStatus={this.setZombieStatus}/>}/>
           <Route exact path='/sign_up' render={()=> <SignUp createZombieStatus={this.createZombieStatus}/>}/>
        </div>

        :

        <Switch>
          <Route exact path='/logout' component={null} />
          <Route exact path='/profile' render={()=> <Profile user={this.state.user}/>}/>
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
