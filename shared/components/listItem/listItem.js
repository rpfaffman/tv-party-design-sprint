import React, { Component, PropTypes } from 'react'
import styles from './ListItem.scss';

const thumbParamsWide = '?crop=auto&scale=both&width=423&height=220'

// import logo from 'images/add.png'


export default class ListItem extends Component {

  render() {
    const {item} = this.props
    return (
      <div className={styles.default}>
        <img src={`${item.thumbnailUrl}${thumbParamsWide}`} />
        <div className="details">
          <h2 className="artist-name">{item.primaryArtists[0].name}</h2>
          <h3 className="video-title">{item.title}</h3>
        </div>
        <div className="btn-add">
          <a href="javascript:void(0)" onClick={() => {this.props.onClick(item)}}>Add</a>
        </div>
      </div>
    )
  }

}
