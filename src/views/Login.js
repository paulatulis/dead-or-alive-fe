import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class Login extends Component {
    

    
  
    render(){
    return(
        <div>
            <form className="ui-form" onSubmit={(e) => this.props.handleLogin(e)}>
                <div className="row">
                    <div className="col s12 m4">
                        <div className="field">
                            <label>Username</label>
                            <input required type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input required type="password" name="password" placeholder="Password"/>
                            <button className="waves-effect waves-light green lighten-1 btn" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
    }
}


export default Login