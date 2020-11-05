import React, { useState, useEffect } from 'react'
import FeaturedItem from './featured-item/FeaturedItem'
import Slider from 'react-slick'
import axios from 'axios'

import { articlesEndpoint } from '../../api/endpoints'

export default function Featured(props) {
  const [featuredItems, setFeaturedItems] = useState([])

  const [isOnMobile, setIsOnMobile] = useState(false)

  useEffect(async () => {
    const articleResults = await axios.get(articlesEndpoint, {
      headers: {
        'Content-Type': 'appliaction/json',
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vyc0pzb24iOnsiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6Ik1USXpORFU9In0sImlhdCI6MTYwNDUyNTcxN30.WGLESGVnSgy8Po0YovDlK1yniL95leIhyBEUt71QmO8',
      },
    })

    setFeaturedItems(articleResults.data)

    window.addEventListener('resize', () => {
      setIsOnMobile(isMobile())
    })
  }, [])

  const ArrowLeft = (props) => {
    if (props.currentSlide == 0) return false
    else
      return (
        <button {...props} className={'prev'}>
          <p>{'<'}</p>
        </button>
      )
  }

  const ArrowRight = (props) => {
    if (props.slideCount - props.currentSlide == 4) {
      return false
    } else
      return (
        <button {...props} className={'next'}>
          <p>{'>'}</p>
        </button>
      )
  }

  const isMobile = () => {
    if (window.innerWidth < 1200) return true
    else return false
  }

  let slideNubmer = () => {
    if (isMobile()) return 1
    else return 4
  }

  const settings = {
    dots: false,
    infinite: false,
    centerMode: isMobile(),
    centerPadding: 20,
    arrows: !isMobile(),
    speed: 300,
    slidesToShow: slideNubmer(),
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  }

  return (
    <div className="featured container">
      <h2>Featured items</h2>
      <Slider {...settings}>
        {featuredItems.map((item) => {
          return <FeaturedItem key={item.id} data={item} />
        })}
      </Slider>
    </div>
  )
}
