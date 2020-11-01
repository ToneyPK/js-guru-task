import React from 'react'
import ctaImage from '../../assets/media/image-post.png'

export default function CTA() {
  return (
    <div className="cta">
      <div className="container ai-center d-flex">
        <img src={ctaImage} />
        <div className="cta-content">
          <h3>Post an Item for Sale</h3>
          <p>
            To post an item for sale - please register or sign in if you are
            already registered with allgood.
          </p>
          <div className="buttons">
            <button className="red hvr-grow">Sign up</button>
            <button className="hollow hvr-grow">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}
