import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
     return (

          <nav>
               <ul>
                    <li>
                         <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li>
                         <Link className="nav-link" to="/home/createuser">Create user</Link>
                    </li>
               </ul>
          </nav>



     )
}
