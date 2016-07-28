import * as api from '../../shared/api'

const path = "/search?q={TERM}&artistsLimit=10&videosLimit=10&excludeExplicitVideos=false"

export function search(term) {
  const query = path.replace('{TERM}', term)
  // console.log('hitting api...')
  return api.get(`https://apiv2.vevo.com${query}`)
}
