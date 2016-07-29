import React, { Component } from 'react';
import styles from './header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={ styles.default }>
        <img src='images/back-arrow-icon.svg' className={ styles['back-arrow'] } />
        <div className={ styles['header'] }>Playlist Queue</div>
      </div>
    );
  }
}
