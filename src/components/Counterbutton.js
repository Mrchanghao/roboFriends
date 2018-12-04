import React, { Component } from 'react'

class CounterButton extends Component {

  state = {
    count: 0
  }


  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count ? true : false
  }

  updateCount = () => {

    this.setState( state => {
      return {count: this.state.count + 1}
    })
  }

  render() {
    console.log('CounterButton')
    return (
      <div>
        <button style={{color: this.props.color}} onClick={this.updateCount}>
          Count up
        </button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

