import React from 'react'

function UserGreeting(props) {
  return (
    <div>
        <h2>Hello,{props.username}!</h2>
        <hr />
    </div>
  )
}

export default UserGreeting