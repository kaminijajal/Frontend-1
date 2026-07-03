import React, { Component } from 'react'

export class UserGreetingClass extends Component {
  render() {
    return (
      <div>
        <h1>hello,{this.props.username}!</h1>
        <hr />
      </div>
      
    )
  }
}

export default UserGreetingClass