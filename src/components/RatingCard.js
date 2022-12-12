import React from 'react'
import './RatingCard.css'
import starImg from '../images/icon-star.svg'

function RatingCard(props) {
  const [stars, setStars] = React.useState(0)
  const [isSelected, setIsSelected] = React.useState(false)
  const starArray = [1,2,3,4,5]
  
  const starButton = starArray.map(
    (item) => <button 
                id={item}
                onClick={() => (setStars(item), setIsSelected(!isSelected))}
                className={`${(stars === item) ? 'selected-rating-number' : 'rating-number'}`}
                key={item}>
                  <h3>
                    {item}
                  </h3>
              </button>)
  return (
    <div className='rating-card-main-container'>
        <img className='star-img' src={starImg} alt='star'/>
        <h2 className='heading'>How did we do?</h2>
        <p className='description'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='rating-star-container'>
            {starButton}
        </div>
        <button onClick={() => props.setStar(stars)}  className='btn-submit'><h3>SUBMIT</h3></button>
    </div>
  )
}

export default RatingCard