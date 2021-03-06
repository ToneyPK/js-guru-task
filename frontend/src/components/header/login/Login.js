import React, { useState } from 'react'
import axios from 'axios'

import { loginEndpoint } from '../../../api/endpoints'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (e) => {
    e.preventDefault()

    const headers = {
      'Content-Type': 'application/json',
    }

    const loginResult = await axios.post(
      loginEndpoint,
      {
        email: email,
        password: password,
      },
      headers
    )

    if (loginResult.status == 200) {
      props.setIsLogged(true)
      localStorage.setItem('token', loginResult.data.token)
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className='block-backdrop'>
      <form onSubmit={login} className='login d-flex'>
        <input type='text' placeholder='Email' onChange={handleEmailChange} />
        <input
          type='password'
          placeholder='Password'
          onChange={handlePasswordChange}
        />
        <button type='submit' className='red hvr-grow'>
          Login
        </button>
      </form>
    </div>
  )
}
