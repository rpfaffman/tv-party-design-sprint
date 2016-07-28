import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import Form from './form'
import Results from './results'

import * as SearchAction from 'modules/search/actions';
// import * as NavActions from '../actions/navigation'
// import * as KeyActions from '../constants/keyactions'
// import * as SC from '../constants/Search'

export default class Search extends Component {

  shouldComponentUpdate(nextProps) {
    return (nextProps !== this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.form.query.length > 0 &&
        nextProps.form.query.length !== this.props.form.query.length) {
      this.props.dispatch(SearchAction.search(nextProps.form.query))
    }
  }

  componentDidMount() {
    // this.props.dispatch(SearchAction.loadDefaultArtists())
    // this.props.dispatch(SearchAction.loadDefaultVideos())
  }

  buildQuery(searchTerm) {
    // there is a search term
    if (searchTerm && searchTerm.length > 0) {
      this.props.dispatch(SearchAction.buildQuery(searchTerm))

    // The term has been cleared out or is not present
    } else {
      this.props.dispatch(SearchAction.reset())
    }
  }

  hasResults() {
    return this.props.results.artists.length || this.props.results.videos.length
  }

  onClear() {
    // this.props.dispatch(SearchAction.reset())
  }

  onSearch() {
    this.props.dispatch(SearchAction.search(this.props.form.query))
  }

  inFocus(component) {
    return (this.props.activeComponent === component)
  }

  render() {
    return (
      <div className="search">
        <div className="search-form">
          <Form onChange={(searchTerm) => this.buildQuery(searchTerm) }
            onClear={() => this.onClear()}
            onSearch={() => this.onSearch()}
          />
        </div>
        <div className="search-results full-height">
          <Results results={this.props.results} />
        </div>
      </div>
    )
  }
}

// Search.defaultProps = { activeComponent: SC.FORM }

function mapStateToProps(state) {
  return {
    form: state.search.form,
    results: state.search.results
  }
}

export default connect(mapStateToProps)(Search)
