import React, { useState } from 'react'
import img1 from '../../assets/media/img1.jpg'
import img2 from '../../assets/media/img2.jpg'
import img3 from '../../assets/media/img3.jpg'
import FeaturedItem from './featured-item/FeaturedItem'
import Slider from 'react-slick'
import { faTired } from '@fortawesome/free-solid-svg-icons'

export default function Featured() {
  const [featuredItems, setFeaturedItems] = useState([
    {
      id: 1,
      img: img1,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },

    {
      id: 2,
      img: img2,
      name: 'Beige sofa',
      author: 'Harinder B.',
      description: 'In good contition, from smoke free home.',
      price: 400,
    },

    {
      id: 3,
      img: img3,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },

    {
      id: 4,
      img: img1,
      name: 'Beige sofa',
      author: 'Harinder B.',
      description: 'In good contition, from smoke free home.',
      price: 400,
    },

    {
      id: 5,
      img: img2,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },

    {
      id: 6,
      img: img3,
      name: 'Beige sofa',
      author: 'Harinder B.',
      description: 'In good contition, from smoke free home.',
      price: 400,
    },

    {
      id: 7,
      img: img1,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },

    {
      id: 8,
      img: img2,
      name: 'Beige sofa',
      author: 'Harinder B.',
      description: 'In good contition, from smoke free home.',
      price: 400,
    },

    {
      id: 9,
      img: img3,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },
    {
      id: 10,
      img: img1,
      name: 'Beige sofa',
      author: 'Harinder B.',
      description: 'In good contition, from smoke free home.',
      price: 400,
    },

    {
      id: 11,
      img: img2,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },
  ])

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
