import React, { Component } from 'react'

class Header extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  render() {
    console.log('Header')
    return (
      <header>
        <h1 className='f1'>ROBO ITEMS</h1>

      </header>
    )
  }
}

export default Header;