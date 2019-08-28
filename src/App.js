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
  handleLogin = (e) => {
    e.preventDefault()
    let form = e.target
    let object = {
        username: form.username.value,
        password: form.password.value
    }
    console.log(object)

    fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accepts: 'application/json'},
    body: JSON.stringify({user: object })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.message) {
        alert("Error")
        this.setState({errors: data.message}, () => console.log("Errors:", this.state.errors))
      }
      else {
        this.setState({user: data.user, redirect: <Redirect to='/profile' /> })
        localStorage.setItem('token', data.token)
        window.history.pushState({url: "/profile"}, "", "/profile")
        this.setZombieStatus(data)
        this.forceUpdate()
      }
    })

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
  
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token){
      fetch('http://localhost:3000/init-state', {
      headers: {Authorization: token}
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // localStorage.setItem('token', res.token)
      this.setState({user: res })
    })
    }
    
    
  }

  render () { 
    console.log(this.state)
    return (
      <div className="main-container">
        <div className="grid-container">
        {this.state.redirect}
        <Navbar handleLogout={this.handleLogout}/>
      {!localStorage.token ? 

        <div>
           <LandingPage />
           <Route exact path='/login' render={()=> <Login handleLogin={this.handleLogin}/>}/>
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
