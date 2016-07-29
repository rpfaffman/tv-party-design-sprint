import { connect } from 'react-redux';

import { Queue } from '../components/queue';
import { get as getQueue } from 'modules/queue/actions';

const mapStateToProps = (state) => {
  return {
    queue: state.queue
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getQueue: () => { dispatch(getQueue()) } };
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
