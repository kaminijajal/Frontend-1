import React from 'react'
import profile from '../assets/test.png'
import PropTypes from 'prop-types'


function UserProfile1({username,followers = 9000,profilePic}) {
  return (
    <div>
            <img src={profile} alt="" />
            <h2>{username}</h2>
            <p>{followers ?? 0}</p>

    </div>
  )
}

UserProfile1.defaultProps = {
  followers:0
    
}
export default UserProfile1