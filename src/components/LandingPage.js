import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props) {
   return(
       <div>
           {
               window.location.pathname === '/' ?
               <div className = "container col s12">
                   hello?
               </div>
                :
                null
            }
       </div>
   )
}

export default LandingPage