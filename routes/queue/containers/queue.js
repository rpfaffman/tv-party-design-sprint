import { connect } from 'react-redux';

import { Queue } from '../components/queue';
<<<<<<< 04c3a41613e300734a5c6500fd3f2754d49a9dbd
import { get as getQueue, remove as removeItem } from 'modules/queue/actions';
=======
import { get as getQueue, set as setQueue } from 'modules/queue/actions';
>>>>>>> up move up/down functionality

const mapStateToProps = (state) => {
  return {
    queue: state.queue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQueue: () => { dispatch(getQueue()) },
<<<<<<< 04c3a41613e300734a5c6500fd3f2754d49a9dbd
    removeVideo: (item) => { dispatch(removeItem(item)) }
=======
    setQueue: (queue) => { dispatch(setQueue(queue)) }
>>>>>>> up move up/down functionality
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
