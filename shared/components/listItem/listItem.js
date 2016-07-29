import React, { Component, PropTypes } from 'react'
import styles from './listItem.scss';

const thumbParamsWide = '?crop=auto&scale=both&width=423&height=220'

const PLUS = '/images/add@2x.png'
const CHECK = '/images/check-icon.svg'


export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = { iconSrc: PLUS }
  }

  onClick() {
    // only add the first time
    if (this.state.iconSrc === PLUS) this.props.onClick(this.props.item)
    this.setState({ iconSrc: CHECK })
  }

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
          <a href="javascript:void(0)" onClick={() => this.onClick()}>
            <img src={this.state.iconSrc} />
          </a>
        </div>
      </div>
    )
  }

}
