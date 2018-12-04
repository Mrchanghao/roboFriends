import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    console.log('SearchBox')
    return (
      <div className='pa2 input__component'>
        <input 
        onChange={this.props.handleChange}
        className='pa3 ba b--green bg-light-blue input__component'
        type='text' placeholder='Search the robo' />
      </div>
    )
  }
}
