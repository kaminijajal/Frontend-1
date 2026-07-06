import React, { useState } from 'react'
import HeartAdd2FillIcon from '@iconify-react/ri/heart-add-2-fill';

function LikeButton() {
  const [count,setCount] = useState(0);

  const handleLike = () => {
    setCount(count+1);
  }
  return (
    <div>
      
      <span><HeartAdd2FillIcon height="3em" onClick={handleLike}/></span>
      <h3>Likes : {count} </h3>
      <hr />
       
    </div>

  )
}

export default LikeButton