import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Searchbar() {
  return (
    <div className='searchbar '>
      <form className='d-flex justify-center container'>
        <input type='text' placeholder='Location'></input>
        <input type='text' placeholder='Category'></input>
        <input type='text' placeholder='Charity'></input>
        <button type='submit'>
          <FontAwesomeIcon className='hvr-grow' icon={faSearch} />
        </button>
      </form>
    </div>
  )
}
