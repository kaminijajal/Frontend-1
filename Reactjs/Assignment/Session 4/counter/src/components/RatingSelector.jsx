import React, { useState } from 'react'
import Star1FlatIcon from '@iconify-react/streamline-color/star-1-flat';

function RatingSelector() {
    const [rating,setRating]=useState(0);
  return (
    <divSS>
        
        <h2>Rate Your Food</h2>
        {[1,2,3,4,5].map((star) => (
            <span key={star} onClick={() => setRating(star)} style={{
            marginRight:"20px",
            cursor: "pointer",
          }}><Star1FlatIcon height="3em"   /></span>
        ))}
    <p>Your Rating : {rating} /5</p>
    <br />
        <hr />
    </divSS>
  )
}

export default RatingSelector