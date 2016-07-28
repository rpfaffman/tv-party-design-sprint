import * as searchAPI from './searchAPI'
// import * as artistsAPI from '../api/artists'
// import * as Constants from '../constants/Search'

export const BUILD_QUERY = 'actions.search.BUILD_QUERY'
export const RESET = 'actions.search.RESET'
export const SEARCH = 'actions.search.SEARCH'

export const SET_RESULTS = 'actions.search.SET_RESULTS'


/** SYNC **/

export function buildQuery(query) {
  return {
    type: BUILD_QUERY,
    query
  }
}

export function setResults(results) {
  return {
    type: SET_RESULTS,
    results
  }
}

export function reset() {
  return {
    type: RESET
  }
}

/** ASYNC **/
export function search(term) {
  return (dispatch) => {
    searchAPI.search(term)
      .then(response => response.json())
      .then(json => {
        if (json.errors)  {throw new Error('Search failed')}
        dispatch(setResults(json))
        return json
      })
      .catch(error => {
        console.log('[search]', error)
      })
  }
}
