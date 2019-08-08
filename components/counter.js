import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCount, resetCount } from '../store'

class Counter extends Component {
  increment = (amount) => {
    const { incrementCount } = this.props
    incrementCount(amount)
  }

  reset = () => {
    const { resetCount } = this.props
    resetCount()
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={() => this.increment(1)}>+1</button>
        <button onClick={() => this.increment(5)}>+5</button>
        <button onClick={() => this.increment(10)}>+10</button>
        <button onClick={() => this.increment(-1)}>-1</button>
        <button onClick={() => this.increment(-5)}>-5</button>
        <button onClick={() => this.increment(-10)}>-10</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { count } = state
  return { count }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCount, resetCount }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
