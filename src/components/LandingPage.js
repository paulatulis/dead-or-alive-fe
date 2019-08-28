import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/zombielogo.png';


function LandingPage(props) {
   return(
       <div>
           {
               window.location.pathname === '/' ?
               <div className = "container col s12">
                   <Link to='/'><img alt="logo" className="brand-logo center" src={logo}/></Link>
               </div>
                :
                null
            }
       </div>
   )
}

export default LandingPage