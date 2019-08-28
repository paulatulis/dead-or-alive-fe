import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class SignUp extends Component {
    state={
        redirect: ''
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        let object = {
            username: form.username.value,
            password: form.password.value, 
            img_url: form.img_url.value
        }
        fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accepts: 'application/json','Access-Control-Allow-Origin':'*'},
        mode: "cors",
        body: JSON.stringify({user: object })
        })
        .then(res => res.json())
        .then(data => {
          if (data.message) {
            alert("Error")
            this.setState({errors: data.message}, () => console.log("Errors:", this.state.errors))
          }
          else {
            this.setState({object, redirect: <Redirect to='/profile' /> })
            localStorage.setItem('token', data.jwt)
            window.history.pushState({url: "/profile"}, "", "/profile")
            this.forceUpdate()
            this.props.createZombieStatus(data)
          }
        })
      }

    render(){
        return(
            <div className="row" id="signup">
                {this.state.redirect}
                <form className="col s8" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="username" type="text" className="validate" />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <i className="material-icons prefix">add_a_photo</i>
                            <input id="img_url" type="text" className="validate" />
                            <label htmlFor="img_url">Link to a photo of you</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="waves-effect waves-light blue-grey darken-2 btn-large">Enter</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}


export default SignUp