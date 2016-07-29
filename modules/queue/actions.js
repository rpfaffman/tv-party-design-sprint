import 'whatwg-fetch';
import * as types from './actionTypes';

/* ASYNC */
export function get() {
  return dispatch =>
    fetch('/api/queue', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => dispatch(sync(json)));
};

export function pop() {
  return dispatch =>
    fetch('/api/queue', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => dispatch(sync(json)));
};

export function add(item) {
  return dispatch =>
    fetch('/api/queue', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      .then(res => res.json())
      .then(json => dispatch(sync(json)));
};

export function remove(item) {
  return dispatch =>
    fetch(`/api/queue/remove/${item.isrc}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      .then(res => res.json())
      .then(json => dispatch(sync(json)));
};

export function reset() {
  return dispatch =>
    fetch('/api/queue/reset', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => dispatch(sync(json)));
}

/* SYNC */
export function sync(queue) {
  return {
    type: types.SYNC,
    queue
  }
};
