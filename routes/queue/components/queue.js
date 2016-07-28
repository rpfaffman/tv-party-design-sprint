import React, { Component } from 'react';

export class Queue extends Component {
  componentWillMount() {
    this.addToQueue = () => { this.props.addToQueue({ isrc: 'dummy' }); };
    this.popQueue = () => this.props.popQueue();
  }

  componentDidMount() {
    this.props.getQueue();
  }

  render() {
    const { queue } = this.props;

    return (
      <div>
        <h1>Hit the queue</h1>
        <h3 onClick={this.addToQueue}>add</h3>
        <h3 onClick={this.popQueue}>pop</h3>
        <h5>here's the queue</h5>
        {JSON.stringify(queue)}
      </div>
    );
  }
}
