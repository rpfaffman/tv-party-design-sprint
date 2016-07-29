import { connect } from 'react-redux';

import { Queue } from '../components/queue';
import { get as getQueue, remove as removeItem } from 'modules/queue/actions';

const mapStateToProps = (state) => {
  return {
    queue: state.queue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQueue: () => { dispatch(getQueue()) },
    removeVideo: (item) => { dispatch(removeItem(item)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
