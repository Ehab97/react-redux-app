import React, { useState } from 'react'
// import {Redirect} from 'react-router-dom'
function Login({history}) {
     
     const [name, setName] = useState('');
     const [password, setPassword] = useState('');
     const [check, setCheck] = useState('');
     const Validate = (e) => {
          e.preventDefault();
       
          if (name.length && password.length) {
        
              history.push('/home');
          } else {
               setCheck('plese fill all inputs')
          }
          setName('');
          setPassword('');
     }
     
     return (
          <div className="container">
          <div className="row">
               <div className="col-8 m-auto">
                    <form onSubmit={Validate}>
                         <div className="mb-3">
                              <label className="form-label">user name</label>
                              <input type="text" className="form-control"
                                   onChange={(e) => setName(e.target.value)}
                                   value={name}
                                    />
                         </div>
                         <div className="mb-3">
                              <label className="form-label">Password</label>
                              <input type="password" className="form-control"
                                   onChange={(e) => setPassword(e.target.value)}
                                   value={password}
                                    />
                         </div>

                        <div className="text-center">
                         <button className="btn btn-primary" type="submit">Log in</button>
                        </div>
                         {
                              () => {
                                   if (check.length) {
                                        <div className="alert alert-danger mt-5" role="alert">{check}</div>
                                   }else{
                                       history.push('/home');
                                   }
                              }
                         }
                        
                    </form>
               </div>
          </div>
     </div>
     )
}

export default  Login;

