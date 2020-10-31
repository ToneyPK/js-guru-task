import React from 'react'
import footerLogo from '../../assets/media/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container d-flex">
        <div className="info d-flex mr-20">
          <img src={footerLogo} />
          <p>
            Online marketplace, where you can sell your stuff in support of the
            charity or campaign you choose.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faTwitterSquare} />
          </div>
        </div>

        <div className="company-links mr-20">
          <h4>Allgood</h4>
          <div className="links-container d-flex">
            <a href="#">About us</a>
            <a href="#">Contact</a>
            <a href="#">Help</a>
          </div>
        </div>

        <div className="charities">
          <h4>Charities</h4>
          <div className="links-container d-flex mr-20">
            <a href="#">Charity/Campaign partners</a>
            <a href="#">Sign up charity/campaign</a>
          </div>
        </div>
      </div>

      <div className="copyright container d-flex">
        <p className="mr-20">&copy; AllGood 2020. All Rights Reserved</p>
        <a className="mr-20" href="#">
          Privacy Policy
        </a>
        <a className="mr-20" href="#">
          Terms of Services
        </a>
      </div>
    </div>
  )
}
