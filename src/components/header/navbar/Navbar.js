import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import logoImage from '../../../assets/media/logo-jsguru.png'
import userImage from '../../../assets/media/user-image.jpg'

export default function Navbar() {
  return (
    <div className="navbar container p-20 d-flex ai-center">
      <a href="#" className="logo">
        <img src={logoImage} alt="logo"></img>
      </a>

      <div className="search-tabs ai-center">
        <a className="active" href="#">
          Search items
        </a>
        <a href="#">Post items</a>
      </div>

      <div onClick={'xss'} className="status flex-layout ai-center">
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faBell} />
        <div className="user d-flex ai-center">
          <img src={userImage} />
          <p>Username</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  )
}
