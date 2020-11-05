import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from 'axios'

import FeaturedItem from './featured-item/FeaturedItem'
import { articlesEndpoint } from '../../api/endpoints'

export default function Featured(props) {
  const [featuredItems, setFeaturedItems] = useState([])
  const [isOnMobile, setIsOnMobile] = useState(false)

  useEffect(async () => {
    if (props.isLogged) {
      const articleResults = await axios.get(articlesEndpoint, {
        headers: {
          'Content-Type': 'appliaction/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })

      setFeaturedItems(articleResults.data)
    }

    checkIfMobile()
    listenForResize()
  }, [props.isLogged])

  const listenForResize = () => {
    window.addEventListener('resize', () => {
      setIsOnMobile(window.innerWidth < 1200)
    })
  }

  const checkIfMobile = () => {
    setIsOnMobile(window.innerWidth < 1200)
  }

  const ArrowLeft = (properties) => {
    if (properties.currentSlide == 0) return false
    else
      return (
        <button {...properties} className={'prev'}>
          <p>{'<'}</p>
        </button>
      )
  }

  const ArrowRight = (properties) => {
    if (properties.slideCount - properties.currentSlide == 4) {
      return false
    } else
      return (
        <button {...properties} className={'next'}>
          <p>{'>'}</p>
        </button>
      )
  }

  let slideNubmer = () => {
    if (isOnMobile) return 1
    else return 4
  }

  const settings = {
    dots: false,
    infinite: false,
    centerMode: isOnMobile,
    centerPadding: 20,
    arrows: !isOnMobile,
    speed: 300,
    slidesToShow: slideNubmer(),
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  }

  return (
    <div className='featured container'>
      <h2>Featured items</h2>
      <Slider {...settings}>
        {featuredItems.map((item) => {
          return <FeaturedItem key={item.id} data={item} />
        })}
      </Slider>
    </div>
  )
}
