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
    <div className="about d-flex container">
      <div className="intro">
        <h2>How it Works</h2>
        <p>Learn more about AllGood</p>
      </div>
      <hr />
      <div className="content">
        <div className="icons d-flex ">
          <div className="icon">
            <img className="arrow" src={arrowImage} alt="arrow image" />
            <img src={blueImage} alt="icon image" />
            <img className="dash" src={goldLine} alt="dash image" />
            <h4>Post an Item</h4>
            <p>
              Register to post an item for sale.{' '}
              <span className="red-text">
                <a href="#">Register now!</a>
              </span>
            </p>
          </div>

          <div className="icon">
            <img src={goldImage} alt="icon image" />
            <img className="dash" src={greenLine} alt="dash image" />
            <h4>Select an Organization</h4>
            <p>
              Register to post an item for sale.{' '}
              <span className="red-text">
                <a href="#">Register now!</a>
              </span>
            </p>
          </div>

          <div className="icon">
            <img src={greenImage} alt="icon image" />
            <img className="dash" src={blueLine} alt="dash image" />
            <h4>Buyer makes the Payment</h4>
            <p>
              Register to post an item for sale.{' '}
              <span className="red-text">
                <a href="#">Register now!</a>
              </span>
            </p>
          </div>

          <div className="icon">
            <img src={purpleimage} alt="icon image" />
            <h4>Post an Item</h4>
            <p>You sell your item and arrange for pickup.</p>

            <div className="icon-heart">
              <img className="dash-heart" src={dashedHeartImage} />
              <h4>Donate</h4>
              <p>
                AllGood sends the proceeds directly to the charity/campaign you
                chose to support.
              </p>
            </div>
          </div>
        </div>

        <div className="video">
          <h3 className="d-none">Watch the video</h3>
          <img src={videoImage} />
        </div>
      </div>
    </div>
  )
}
