import React, {useState} from 'react';
import './registration.css'

export const Registration = () => {

  const [user, setUser] = useState({
    username: "", 
    email: "",
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
    <div className='registration'>
      <input type="text" name="username" value={user.username} placeholder='enter your username' onChange={handleChange}/>
      <input type="email" name="email" value={user.email} placeholder='enter your email' onChange={handleChange}/>
      <input type="password" name="password" value={user.password}  placeholder='enter password' onChange={handleChange}/>
      <div className="btn">Register</div>
      <div>Already have an account?</div>
      <div className="btn">Log In</div>
    </div>
  )
}
