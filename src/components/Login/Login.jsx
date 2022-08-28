import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="box">
            <img className="wave" src="bg.jpg"/>
           
            <div class="container">
		
     
            <h2 className='signin'>WELCOME</h2>
            <form action="/" onSubmit={handleSubmit} className="box">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" required onChange={e=>setUserName(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label>
                    
                    <br/>
                    <input type="password" name="password" required onChange={e=> setPassword(e.target.value)}/>
                </p>
                <p>
                  <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            
        </div>
        </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};