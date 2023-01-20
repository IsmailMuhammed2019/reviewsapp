import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
 const [index, setIndex] = useState(0)
 const {image, name, text, job} = people[index]


const checkNumber = (number) => {
 if (number > people.length - 1){
   return 0
 }
 if (number < 0){
  return people.length - 1
 }
 return number
}

 const nextButton = () => {
  setIndex((index) => {
   let newIndex = index + 1
   return checkNumber(newIndex)
  })
 }

 const prevButton = () => {
  setIndex((index) => {
   let newIndex = index - 1
   return checkNumber(newIndex)
  })
 }
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
      <div className='button-container'>
        <button className='prev-btn' onClick={prevButton}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextButton}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>Select Random</button>
    </div>
  )
}

export default Review
