import React, { Component } from 'react'

export class UserForm extends Component {
    state={
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
  render() {
    return (
      <div>UserForm</div>
    )
  }
}

export default UserForm