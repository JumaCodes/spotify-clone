import React from 'react'
import '../css/Login.css'
import { loginUrl } from '../spotify'

const logo = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"



function Login() {
  return (
    <div className="login">
      <img src={logo} alt="Spotify" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
