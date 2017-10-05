import React, { Component } from 'react'
import PropTypes from 'prop-types'

import shortid from 'shortid'
import inView from 'in-view'

class InView extends Component {
  constructor () {
    super()
    this._id = shortid.generate()
  }

  componentDidMount () {
    inView(`.${this._id}`)
      .on('enter', this.props.onEnter)
      .on('exit', this.props.onExit)
  }

  render () {
    return (
      <div className={this._id} style={this.props.style}>
        { this.props.children }
      </div>
    )
  }
}

export default InView;