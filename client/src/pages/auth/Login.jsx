import React, {useState} from 'react';
import './login.css'

export const Login = () => {

    const [user, setUser] = useState({
        username: "", 
        password: ""
    })

    const handleChange = e => {
        const {name, value } = e.target
        setUser({
          ...user, 
          [name]: value
        })
      }


  return (
    <div className='login'>
      <input type="text" name="username" value={user.username} placeholder='enter your username' onChange={handleChange}/>
      <input type="password" name="password" value={user.password}  placeholder='enter password' onChange={handleChange}/>
      <div className="btn">Log In</div>
      <div>Do not have an account?</div>
      <div className="btn">Registration</div>
    </div>
  )
}
