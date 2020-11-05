import React from 'react'

import Navbar from './navbar/Navbar'
import Searchbar from './searchbar/Searchbar'
import Hero from './hero/Hero'
import Login from './login/Login'

export default function Header(props) {
  const renderLogin = () => {
    if (!props.isLogged)
      return <Login isLogged={props.isLogged} setIsLogged={props.setIsLogged} />
  }

  return (
    <div>
      <div>
        <header>
          {renderLogin()}
          <Navbar setIsLogged={props.setIsLogged} isLogged={props.isLogged} />
          <Searchbar />
          <Hero />
        </header>
        <div className='curved-background'></div>
      </div>
    </div>
  )
}
