import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
 const [index, setIndex] = useState(0)
 const {image, name, text, job} = people[index]
  return (
   <div className='review'>
    <div className='img-container'>
     <img className='person-img' src={image} alt={name} />
     <div className='quote-icon'>
      <FaQuoteRight />
     </div>
    </div>
    <h3 className='author'>{name}</h3>
    <h4 className='job'>{job}</h4>
    <p className='info'>{text}</p>
   </div>
  )
}

export default Review
