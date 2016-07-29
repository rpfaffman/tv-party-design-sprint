import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Form extends Component {

  // not all of the form components have the same number
  // of elements in a row. This helps transition between
  // components so the focus doesn't disappear.

  // update the search query
  update() {
    const input = this.searchField
    this.props.onChange(input.value)
  }

  // add character to query
  addChar(char) {
    const input = this.searchField

    input.value = input.value + char
    this.update()
  }

  render() {
    return (
      <div className="form-container">
        <input className="search-input-field uppercase" placeholder="search" ref={(ref) => this.searchField = ref} type="text" onChange={() => this.update()} />
      </div>
    )
  }
}

