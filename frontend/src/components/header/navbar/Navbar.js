import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import logoImage from '../../../assets/media/logo-jsguru.png'
import userImage from '../../../assets/media/user-image.jpg'

import { customerEndpoint } from '../../../api/endpoints'

export default function Navbar(props) {
  const [dropdownToggled, setDropdownToggled] = useState(false)
  const [user, setUser] = useState({})

  const dropdownClass = dropdownToggled ? 'dropdown d-flex' : 'd-none'
  const showStatus = props.isLogged ? 'status flex-layout ai-center' : 'd-none'

  useEffect(async () => {
    if (props.isLogged) {
      const userResults = await axios.get(customerEndpoint, {
        headers: {
          'Content-Type': 'appliaction/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })

      setUser(userResults.data)
    }
  }, [props.isLogged])

  const toggleDropdown = () => {
    setDropdownToggled(!dropdownToggled)
  }

  const logout = () => {
    localStorage.removeItem('token')
    props.setIsLogged(false)
  }

  return (
    <div className="navbar p-20 d-flex ai-center">
      <a href="#" className="logo">
        <img src={logoImage} alt="logo"></img>
      </a>

      <div className="search-tabs ai-center">
        <a className="active" href="#">
          Search items
        </a>
        <a href="#">Post items</a>
      </div>

      <div className={showStatus}>
        <a href="#">
          <FontAwesomeIcon className="hvr-grow" icon={faEnvelope} />
        </a>
        <a href="#">
          <div className="notifications">2</div>
          <FontAwesomeIcon className="hvr-grow" icon={faBell} />
        </a>

        <div onClick={toggleDropdown} className="user d-flex ai-center">
          <img src={userImage} />
          <a className="d-flex ai-center" href="#">
            <p>{user.name}</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
        <div className={dropdownClass}>
          <h6>
            {user.name} {user.lastname}
          </h6>
          <p>{user.job}</p>
          <p>{user.age} years old</p>
          <button onClick={logout} className="red hvr-grow">
            Logout
          </button>
        </div>
      </div>

      <div className="searchbar">
        <form className="d-flex justify-center container">
          <input type="text" placeholder="Search or post..."></input>
          <button type="submit">
            <FontAwesomeIcon className="hvr-grow" icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  )
}
