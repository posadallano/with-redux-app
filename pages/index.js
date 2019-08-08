import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Examples from '../components/examples'
import Header from '../components/Header';
import TitleParagraph from '../components/TitleParagraph';

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <Header />
        <TitleParagraph />
        <Examples />
      </div>
    );
  }
}

const mapDispatchToProps = { startClock }

export default connect(
  null,
  mapDispatchToProps
)(Index)
