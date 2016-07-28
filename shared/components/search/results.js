import React, { Component } from 'react'
import { connect } from 'react-redux'

// import * as ResultsActions from '../../actions/search/results'


export default class Results extends Component {

  extractArtistData(artists) {
    return (
      artists.map(artist => {
        if (!artist) return false
        return {
          name: artist.name,
          thumbnailUrl: artist.thumbnailUrl,
          linkUrl: `/artist/${artist.urlSafeName}`
        }
      })
    ).filter(Boolean) // filters out falsey values
  }

  extractVideoData(videos) {
    return (
      videos.map(video => {
        if (!video) return false
        const artists = (video.artists || video.primaryArtists[0].name)
        return {
          artists,
          song: video.title,
          thumbnailUrl: video.thumbnailUrl,
          linkUrl: `/watch/${video.isrc}`
        }
      })
    ).filter(Boolean) // filters out falsey values
  }

  render() {
    return (
      <div className="results-container">
        {JSON.stringify([...this.props.results.artists, ...this.props.results.videos])}
      </div>
    )
  }
}

export default Results
// <ArtistReel
//   title={translate('shared.labels.userProfile.artists')}
//   artists={this.extractArtistData(this.props.results.artists)}
//   exitFunction={(direction) => this.navTransition(direction)}
//   inFocus={this.inFocus(Constants.ARTIST_REEL)}
//   cssClasses={this.inFocus(Constants.ARTIST_REEL) ? 'active' : ''}
// />
// <VideoReel
//   title={translate('shared.labels.userProfile.videos')}
//   videos={this.extractVideoData(this.props.results.videos)}
//   exitFunction={(direction) => this.navTransition(direction)}
//   inFocus={this.inFocus(Constants.VIDEO_REEL)}
//   cssClasses={this.inFocus(Constants.VIDEO_REEL) ? 'active' : ''}
