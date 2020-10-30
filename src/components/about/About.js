import React from 'react'
import arrowImage from '../../assets/media/arrow.png'
import blueImage from '../../assets/media/icon-blue.png'
import goldLine from '../../assets/media/dashed-line-gold.png'
import goldImage from '../../assets/media/icon-gold.png'
import greenLine from '../../assets/media/dashed-line-green.png'
import greenImage from '../../assets/media/icon-green.png'
import blueLine from '../../assets/media/dashed-line-blue.png'
import purpleimage from '../../assets/media/icon-purple.png'
import dashedHeartImage from '../../assets/media/dashed-heart.png'
import videoImage from '../../assets/media/watch-the-video.png'

export default function About() {
  return (
    <div className="about">
      <h2>How it Works</h2>
      <p>Learn more about AllGood</p>
      <hr />
      <div className="content">
        <div className="icons">
          <div className="icon">
            <img src={arrowImage} alt="arrow image" />
            <img src={blueImage} alt="icon image" />
            <img src={goldLine} alt="dash image" />
            <h3>Post an Item</h3>
            <p>
              Register to post an item for sale.{' '}
              <span className="red-text">Register now!</span>
            </p>
          </div>
          <div className="icon">
            <img src={goldImage} alt="icon image" />
            <img src={greenLine} alt="dash image" />
            <h3>Select an Organization</h3>
            <p>
              Register to post an item for sale.{' '}
              <span className="red-text">Register now!</span>
            </p>
          </div>
          <div className="icon">
            <img src={greenImage} alt="icon image" />
            <img src={blueLine} alt="dash image" />
            <h3>Buyer makes the Payment</h3>
            <p>
              Register to post an item for sale.{' '}
              <span className="red-text">Register now!</span>
            </p>
          </div>
          <div className="icon">
            <img src={purpleimage} alt="icon image" />
            <h3>Post an Item</h3>
            <p>You sell your item and arrange for pickup.</p>

            <img src={dashedHeartImage} />
            <h3>Donate</h3>
            <p>
              AllGood sends the proceeds directly to the charity/campaign you
              chose to support.
            </p>
          </div>
        </div>
        <div className="video">
          <img src={videoImage} />
        </div>
      </div>
    </div>
  )
}
