import React from 'react'
import profile from '../assets/test.png'

function UserProfile1({username,followers=0,profilePic}) {
  return (
    <div>
            <img src={profile} alt="" />
            <h2>{username}</h2>
            <p>{followers}</p>

    </div>
  )
}

UserProfile1.defaultProps = {
    profilePic:{profile}
}
export default UserProfile1