import React from 'react'
// import test from '../assets/test.png'

function UserProfile(props) {
  return (
    <div>
        <hr />
        <img src={props.profilePic} alt="" />
        <h2>{props.username}</h2>
        <p>{props.followers}</p>
        <hr />
        
    </div>
  )
}

export default UserProfile