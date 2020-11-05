import React, { useState } from 'react'
import axios from 'axios'
import { loginEndpoint } from '../../../api/endpoints'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'JWT fefege...',
    }

    const loginResult = await axios.post(
      loginEndpoint,
      {
        email: email,
        password: password,
      },
      headers
    )

    props.setIsLogged(true)
    localStorage.setItem('token', loginResult.data.token)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={handleEmailChange}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      ></input>
      <button onClick={login}></button>
    </div>
  )
}
