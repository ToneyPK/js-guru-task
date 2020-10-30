import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import logoImage from '../../../assets/media/logo-jsguru.png'
import userImage from '../../../assets/media/user-image.jpg'

export default function Navbar() {
  return (
    <div className="navbar container d-flex">
      <a href="#" className="logo">
        <img src={logoImage} alt="logo"></img>
      </a>

      <div className="search-tabs">
        <a href="#">Search items</a>
        <a href="#">Post items</a>
      </div>

      <div onClick={'xss'} className="status flex-layout">
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faBell} />
        <div className="user">
          <img src={userImage} />
          <p>Username</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  )
}
