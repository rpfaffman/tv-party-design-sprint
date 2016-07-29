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

  onRemove(item) {
    if (confirm('Remove video from queue?')) this.props.removeVideo(item);
  }

  render() {
    return (
      <div className={ styles.default }>
        <Header />
        <AddVideo />
        {this.props.queue.map((i, k) => this.renderItem(i, k))}
        <Footer>
          <Link to="/">Search</Link>
        </Footer>
      </div>
    );
  }


  voteUp(item, key) {
    if (!item.votes[this.props.userId]) {
      this.props.addVote(item, this.props.userId);
    }
  }

  // moveUpInQueue(item, key) {
  //   //swap current item with prev index item
  //   if (key) { // not first item already
  //     const newQueue = this.props.queue.slice(0);
  //     const temp = newQueue[key - 1];
  //     newQueue[key - 1] = item;
  //     newQueue[key] = temp;
  //     this.props.setQueue(newQueue);
  //   }
  // }

  // moveDownInQueue(item, key) {
  //   //swap current item with prev index item
  //   if (key !== this.props.queue.length - 1) { // not first item already
  //     const { queue } = this.props;
  //     const temp = queue[key + 1];
  //     queue[key + 1] = item;
  //     queue[key] = temp;
  //     this.props.setQueue(queue);
  //   }
  // }

  renderItem(item, key) {
    const artistName = item.primaryArtists && item.primaryArtists[0].name;
    return (
      <div className={ styles.item }>
        <img className={ styles['background-img'] } src={ item.thumbnailUrl } />
        <div className={ styles.info }>
          <span className={ styles.artist }>{ artistName }</span>
          <br/>
          <span>{ item.title }</span>
          <br/>
          <span>{ item.voteCount } VOTE{ item.voteCount !== 1? 'S' : '' }</span>
        </div>
        <img src='images/close-icon.svg' className={ styles['close-icon'] } onClick={() => this.onRemove(item)} />
        <img src='images/check-icon.svg' className={ styles['check-icon'] } />
        <div className={ styles.buttonUp } onClick={() => this.voteUp(item, key)}>
          <img src='images/down.svg' />
        </div>
      </div>
    );
  }
}
