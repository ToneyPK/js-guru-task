import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import mainImg from '../../../assets/media/image-main.png'

export default function Hero() {
  return (
    <div className='hero container ai-center d-flex'>
      <div className='hero-items-list d-flex'>
        <div className='hero-item-content green ai-center d-flex'>
          <FontAwesomeIcon icon={faHandHoldingUsd} />
          <p>Turn your stuff into cash donations</p>
        </div>
        <div className='hero-item-content purple ai-center d-flex'>
          <FontAwesomeIcon icon={faCreditCard} />
          <p>Shop allgood.market - and support a charity</p>
        </div>
        <div className='hero-item-content red ai-center d-flex'>
          <FontAwesomeIcon icon={faHeart} />
          <p>A new way to fundraise</p>
        </div>
      </div>
      <div className='hero-image'>
        <img src={mainImg}></img>
      </div>
    </div>
  )
}
