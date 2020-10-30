import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import mainImg from '../../../assets/media/image-main.png'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-items-list">
        <div className="hero-item-content">
          <FontAwesomeIcon icon={faHandHoldingUsd} />
          <p>Turn your stuff into cash</p>
        </div>
        <div className="hero-item-content">
          <FontAwesomeIcon icon={faCreditCard} />
          <p>Shop allgood.market - and support a charity</p>
        </div>
        <div className="hero-item-content">
          <FontAwesomeIcon icon={faHeart} />
          <p>A new way to fundraise</p>
        </div>
      </div>
      <div className="hero-image">
        <img src={mainImg}></img>
      </div>
    </div>
  )
}
