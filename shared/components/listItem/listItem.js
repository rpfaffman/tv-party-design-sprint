import React, { Component, PropTypes } from 'react'
import styles from './listItem.scss';

const thumbParamsWide = '?crop=auto&scale=both&width=423&height=220'

const plus = 'http://imgur.com/8LZUUng.png'


export default class ListItem extends Component {

  render() {
    const {item} = this.props
    return (
      <div className={styles.default}>
        <img className={styles.thumbnail} src={`${item.thumbnailUrl}${thumbParamsWide}`} />
        <div className={styles.details}>
          <div className={styles.artist}>{item.primaryArtists[0].name}</div>
          <div className={styles.title}>{item.title}</div>
        </div>
        <div className={styles.btnAdd}>
          <a href="javascript:void(0)" onClick={() => {this.props.onClick(item)}}>
            <img src={plus} />
          </a>
        </div>
      </div>
    )
  }

}
