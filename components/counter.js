import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCount, incrementClicks, resetCount } from '../store'

class Counter extends Component {
  increment = (amount) => {
    const { incrementCount } = this.props
    incrementCount(amount)
  }

  incrementTotalClicks = () => {
    const { incrementClicks } = this.props
    incrementClicks()
  }

  reset = () => {
    const { resetCount } = this.props
    resetCount()
  }

  render () {
    const { count, clicksCounter } = this.props
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <h2>
          Clicks Counter: <span>{clicksCounter}</span>
        </h2>
        <button onClick={() => {this.increment(1); this.incrementTotalClicks();}}>+1</button>
        <button onClick={() => {this.increment(5); this.incrementTotalClicks();}}>+5</button>
        <button onClick={() => {this.increment(10); this.incrementTotalClicks();}}>+10</button>
        <button onClick={() => {this.increment(-1); this.incrementTotalClicks();}}>-1</button>
        <button onClick={() => {this.increment(-5); this.incrementTotalClicks();}}>-5</button>
        <button onClick={() => {this.increment(-10); this.incrementTotalClicks();}}>-10</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { count, clicksCounter } = state
  return { count, clicksCounter }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCount, incrementClicks, resetCount }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
