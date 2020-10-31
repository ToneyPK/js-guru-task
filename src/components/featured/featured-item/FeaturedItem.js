import { faPray } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FeaturedItem(props) {
  const { name, img, author, description, price } = props.data

  return (
    <div className="featured-item">
      <img src={img} alt="featured item image" />

      <div className="item-info">
        <h4>{name}</h4>
        <h6>{author}</h6>
        <p>{description}</p>
        <p className="price">${price}</p>
      </div>

      <div className="featured-link ai-center">
        <FontAwesomeIcon icon={faPray} />
        <p>Sick Kids</p>
      </div>
    </div>
  )
}
