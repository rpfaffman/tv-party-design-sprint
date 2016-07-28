import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem from 'components/listItem/listItem'
// import * as ResultsActions from '../../actions/search/results'


export default class Results extends Component {

  renderVideoItem(video) {
    return <ListItem item={video} />
  }

  render() {
    return (
      <div className="results-container">
        { this.props.results.videos.map((video) => this.renderVideoItem(video)) }
      </div>
    )
  }
}
