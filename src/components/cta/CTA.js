import React from 'react'
import ctaImage from '../../assets/media/image-post.png'

export default function CTA() {
  return (
    <div className="cta">
      <img src={ctaImage} />
      <div className="cta-content">
        <h2>Post an Item for Sale</h2>
        <p>
          To post an item for sale - please register or sign in if you are
          already registered with allgood.
        </p>
        <button className="red">Sign up</button>
        <button>Sign In</button>
      </div>
    </div>
  )
}
