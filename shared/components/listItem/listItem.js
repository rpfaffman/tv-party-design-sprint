import React, { Component, PropTypes } from 'react'
import styles from './ListItem.scss';

const thumbParamsWide = '?crop=auto&scale=both&width=423&height=220'

import logo from 'images/add.png'


export default class ListItem extends Component {
  render() {
    const {item} = this.props
    return (
      <div className={styles.default}>
        <img src={`${item.thumbnailUrl}${thumbParamsWide}`} />
        <div className="details">
          <h1 className="artist-name">{item.primaryArtists[0].name}</h1>
          <h3 className="video-title">{item.title}</h3>
        </div>
        <a href="javascript:void(0)"><img src={addSrc} /></a>
        <a href="javascript:void(0)"><img src={addSrc2} /></a>
        <a href="javascript:void(0)"><img src={addSrc3} /></a>
        <a href="javascript:void(0)">Add</a>
      </div>
    )
  }

}
