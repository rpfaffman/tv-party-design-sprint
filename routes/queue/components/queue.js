import React, { Component } from 'react';
import { Link } from 'react-router'

import Header from './header';
import AddVideo from './addVideo';
import Footer from 'components/footer/footer'

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
      <div className={ styles.default }>
        <Header />
        <AddVideo />
        {this.props.queue.map(this.renderItem)}
        <Footer>
          <Link to="/">Search</Link>
        </Footer>
      </div>
    );
  }

  renderItem(item, key) {
    const artistName = item.primaryArtists && item.primaryArtists[0].name;
    return (
      <div className={ styles.item }>
        <img className={ styles['background-img'] } src={ item.thumbnailUrl } />
        <div className={ styles.info }>
          <span className={ styles.artist }>{ artistName }</span>
          <br/>
          <span>{ item.title }</span>
        </div>
        <img src='images/check-icon.svg' className={ styles['check-icon'] } />
      </div>
    );
  }
}
