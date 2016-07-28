import { connect } from 'react-redux';

import { Queue } from '../components/queue';
import {
  get as getQueue, add as addToQueue, pop as popQueue
} from 'modules/queue/actions';

const mapStateToProps = (state) => {
  return {
    queue: state.queue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToQueue: (item) => { dispatch(addToQueue(item)) },
    getQueue: () => { dispatch(getQueue()) },
    popQueue: () => { dispatch(popQueue()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
