import { faPray } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function FeaturedItem(props) {
  const { name, img, author, description, price } = props.data

  return (
    <div className="featured-item">
      <img src={img} alt="featured item image" />
      <h4>{name}</h4>
      <h6>{author}</h6>
      <p>{description}</p>
      <p>
        <FontAwesomeIcon icon={faDollarSign} />
        {price}
      </p>
      <div className="featured-link">
        <FontAwesomeIcon icon={faPray} />
        <p>Sick Kids</p>
      </div>
    </div>
  )
}
