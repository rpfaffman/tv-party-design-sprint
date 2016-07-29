import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Form from './form'
import Results from './results'

import * as SearchAction from 'modules/search/actions';
import { add as addToQueue } from 'modules/queue/actions';

export default class Search extends Component {

  shouldComponentUpdate(nextProps) {
    return (nextProps !== this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.form.query.length > 0 &&
        nextProps.form.query.length !== this.props.form.query.length) {
      this.props.search(nextProps.form.query)
    }
  }

  buildQuery(searchTerm) {
    // there is a search term
    if (searchTerm && searchTerm.length > 0) {
      this.props.buildQuery(searchTerm)

    // The term has been cleared out or is not present
    } else {
      // this.props.dispatch(SearchAction.reset())
    }
  }

  hasResults() {
    return this.props.results.artists.length || this.props.results.videos.length
  }

  onClear() {
    // this.props.dispatch(SearchAction.reset())
  }

  render() {
    return (
      <div className="search">
        <div className="search-form">
          <Form onChange={(searchTerm) => this.buildQuery(searchTerm) }
            onClear={() => this.onClear()}
          />
          <Link to="/queue">Queue</Link>
        </div>
        <div className="search-results full-height">
          <Results results={this.props.results} onClickItem={(item) => this.props.addToQueue(item)} />
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

function mapDispatchToProps(dispatch) {
  return {
    addToQueue: (item) => { dispatch(addToQueue(item)) },
    search: (query) => { dispatch(SearchAction.search(query)) },
    buildQuery: (query) => { dispatch (SearchAction.buildQuery(query)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
