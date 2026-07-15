import React from 'react'

function FollowerList() {

     const followers = ["john", "alice", "mike"];

  return (
    <div>
        <hr />
        <h2>Followers</h2>
        {followers.length === 0 ? (
            <p>No Followers</p>
        ) : 
        (
            <ul>
                {followers.map((item,i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        )}
        <hr />
    </div>
  )
}

export default FollowerList