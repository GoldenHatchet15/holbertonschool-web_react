import React from 'react'
import './Login.css'

function Login(){
    return(
      <React.Fragment>
          <div className="App-body">
          <p>Login to access the full dashboard</p>
          <div className="form">
          <label htmlFor="Email">Email: </label>
          <input type="text"></input>
          <label htmlFor="Password">Password: </label>
          <input type="password"></input>
          <button type="submit">OK</button>
          </div>
        </div>
      </React.Fragment>
    )
}
export default Login