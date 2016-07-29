import React, { Component } from 'react';

import Header from './header';
import AddVideo from './addVideo';
import styles from './queue.scss';

const QUEUE_POLL_INTERVAL = 1000;

export class Queue extends Component {
  componentDidMount() {
    this.props.getQueue();
    this.pollQueueInterval = setInterval(this.pollQueue.bind(this), QUEUE_POLL_INTERVAL);
  }

  componentWillUnmount() { clearInterval(this.pollQueueInterval); }

  pollQueue() { this.props.getQueue(); }

  render() {
    return (
      <div>
        <Header />
        <AddVideo />
        {this.props.queue.map(this.renderItem)}
      </div>
    );
  }

  renderItem(item, key) {
    return (
      <div className={ styles.item }>
        <img className={ styles['background-img'] } src={ item.thumbnailUrl } />
        <div className={ styles.info }>
          <span className={ styles.artist }>{ item.primaryArtists[0].name }</span>
          <br/>
          <span>{ item.title }</span>
        </div>
        <img src='images/check-icon.svg' className={ styles['check-icon'] } />
      </div>
    );
  }
}
