import React, { Component } from 'react'
import { connect } from 'react-redux'

// import * as SearchAction from '../../actions/search'
// import * as KeyActions from '../../constants/keyactions'
// import * as SC from '../../constants/Search'

export default class Form extends Component {

  // not all of the form components have the same number
  // of elements in a row. This helps transition between
  // components so the focus doesn't disappear.

  // update the search query
  update() {
    console.log('updating')
    const input = this.searchField
    this.props.onChange(input.value)
  }

  // clear query
  clear() {
    const input = this.searchField

    input.value = null
    this.props.onClear()
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
        <div className="buttons top-buttons">
          <a href="javascript:void(0)" onClick={() => this.clear()} >Clear</a>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    // query: state.search.form.query,
  }
}

export default connect(mapStateToProps)(Form)