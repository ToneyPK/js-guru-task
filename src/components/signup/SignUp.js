import React from 'react'

export default function SignUp() {
  return (
    <div className="sign-up">
      <h3>Are you a Charity or Organization looking to Fundraise?</h3>
      <p>
        Want to register with AllGood.market so people can donate the proceeds
        of their sales to you? Please contact us at{' '}
        <a class="text-light" href="mailto:info@allgood.market">
          info@allgood.market
        </a>{' '}
        or complete out online form.
      </p>
      <button>Sign /up charity/campaign</button>

      <div className="color-circle"></div>
    </div>
  )
}
