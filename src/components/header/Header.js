import React from 'react'
import Navbar from './navbar/Navbar'
import Searchbar from './searchbar/Searchbar'
import Hero from './hero/Hero'

export default function Header() {
  return (
    <div>
      <div className="App">
        <header>
          <Navbar />
          <Searchbar />
          <Hero />
        </header>
      </div>
    </div>
  )
}
