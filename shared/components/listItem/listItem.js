import React, { Component, PropTypes } from 'react'
import styles from './listItem.scss';

const thumbParamsWide = '?crop=auto&scale=both&width=117&height=60'

// import logo from 'images/add.png'


export default class ListItem extends Component {

  render() {
    const {item} = this.props
    return (
      <div className={styles.default}>
        <img src={`${item.thumbnailUrl}${thumbParamsWide}`} />
        <div className={styles.details}>
          <div className={styles.artist}>{item.primaryArtists[0].name}</div>
          <div className={styles.title}> {item.title}</div>
        </div>
        <div className={styles.btnAdd}>
          <a href="javascript:void(0)" onClick={() => {this.props.onClick(item)}}>Add</a>
        </div>
      </div>
    )
  }

}
