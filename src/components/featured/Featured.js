import React, { useState } from 'react'
import img1 from '../../assets/media/img1.jpg'
import img2 from '../../assets/media/img2.jpg'
import FeaturedItem from './featured-item/FeaturedItem'

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
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 400,
    },

    {
      id: 3,
      img: img1,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },

    {
      id: 4,
      img: img2,
      name: 'Beige sofa',
      author: 'Harinder B.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 400,
    },

    {
      id: 5,
      img: img1,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },

    {
      id: 6,
      img: img2,
      name: 'Beige sofa',
      author: 'Harinder B.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
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
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 400,
    },

    {
      id: 9,
      img: img1,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },
    {
      id: 10,
      img: img2,
      name: 'Beige sofa',
      author: 'Harinder B.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 400,
    },

    {
      id: 11,
      img: img1,
      name: 'Almost new sofa',
      author: 'John S.',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 300,
    },
  ])

  return (
    <div className="featured">
      {featuredItems.map((item) => {
        return <FeaturedItem key={item.id} data={item} />
      })}
    </div>
  )
}
