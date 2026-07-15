import React, { useState } from 'react'
import HeartPlusIcon from '@iconify-react/tabler/heart-plus';

function LikeButton() {
  const [count,setCount] = useState(0);

  const handleLike = () => {
    setCount(count+1);
  }
  return (
    <div>
      <h1>LikeButton example</h1>
      {/* <span><HeartAdd2FillIcon height="3em" onClick={handleLike}/></span> */}
      <span><HeartPlusIcon height="3em" onClick={handleLike} /></span>
      <h3>Likes : {count} </h3>
      <hr />
       
    </div>

  )
}

export default LikeButton