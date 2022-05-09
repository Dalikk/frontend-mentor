import React from 'react'

const Review = ({ id, pic, text, author }) => {
  return (
    <div className="reviews__item review">
        <div className="review__logo">
            <img src={pic} alt={author} />
        </div>
        <p className="review__text">{text}</p>
        <div className="review__author author">
            <h5 className="author__name">{author.name}</h5>
            <h6 className="author__position">{author.pos}</h6>
        </div>
    </div>
  )
}

export default Review