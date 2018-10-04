import React, { Component } from "react"
import { connect } from "react-redux"

import View from "./view"
import { counterAC } from "../redux/actions"
import { counterReset, counterAdd } from "../redux/actions/index.js"

class App extends Component {
  static propTypes = {
    ...View.propTypes,
  }
  handleAdd = e => {
    this.props.handleAdd(parseInt(e.target.value))
  }
  render() {
    const { current, handleReset } = this.props
    return (
      <View
        counter={current}
        handleReset={handleReset}
        handleAdd={this.handleAdd}
      />
    )
  }
}

const mapStateToProps = state => ({
  current: state.counter.current,
})

const mapDispatchToProps = {
  handleReset: counterReset,
  handleAdd: counterAdd,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
