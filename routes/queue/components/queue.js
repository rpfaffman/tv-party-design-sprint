import React, { Component } from 'react';
import { Link } from 'react-router';

const mockData = {"artists":[{"name":"FFS","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/108A06344D9B663E0110DD96572B1174201574125011346.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/108A06344D9B663E0110DD96572B1174201574125011346.jpg","urlSafeName":"ffs","totalVideos":6},{"name":"Martha Ffion","urlSafeName":"martha-ffion","totalVideos":1}],"videos":[{"isPremiere":false,"title":"FF","urlSafeTitle":"FF","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/d94c8ced66f559fb32fc204c9a5de1032016286131047803.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/d94c8ced66f559fb32fc204c9a5de1032016286131047803.jpg","isrc":"SEX060600046","viewCount":859556,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":false,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"Kent","urlSafeName":"kent"}],"featuredArtists":[],"associatedArtists":[],"categories":["Music Video"]},{"isPremiere":false,"title":"Ffmulahhh Gang #TRAPOLOGIA (AUDIO)","urlSafeTitle":"Ffmulahhh-Gang-TRAPOLOGIA-(AUDIO)","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/bdc147d1e85eb8ffde3f7ad8fcc49290201624515295484.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/bdc147d1e85eb8ffde3f7ad8fcc49290201624515295484.jpg","isrc":"QMGR31634427","viewCount":44,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":false,"isOriginalContent":false,"isCertified":false,"isAudio":true,"primaryArtists":[{"name":"Dizzy Diddy","urlSafeName":"dizzy-diddy"}],"featuredArtists":[{"name":"Nelly Amz","urlSafeName":"nelly-amz"}],"associatedArtists":[],"categories":["Audio"]},{"isPremiere":false,"title":"This Fffire","urlSafeTitle":"This-Fffire","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/05890B503CC63CA9CDEC852FD7045CB0.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/05890B503CC63CA9CDEC852FD7045CB0.jpg","isrc":"GBA320400430","viewCount":131563,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":false,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"Franz Ferdinand","urlSafeName":"franz-ferdinand"}],"featuredArtists":[],"associatedArtists":[],"categories":["Music Video"]},{"isPremiere":false,"title":"Johnny Delusional (Official Video)","urlSafeTitle":"Johnny-Delusional-(Official-Video)","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/FFFB20FB02E85E25330978AEE708D8A920152153478813.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/FFFB20FB02E85E25330978AEE708D8A920152153478813.jpg","isrc":"GBA321500043","viewCount":705645,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":false,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"FFS","urlSafeName":"ffs"}],"featuredArtists":[],"associatedArtists":[],"categories":["Music Video"]},{"isPremiere":false,"title":"Piss Off (Official Video)","urlSafeTitle":"Piss-Off-(Official-Video)","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/14B0DED478FA325E69075EA4212CE83A20158651859788.png","thumbnail":"http://img.cache.vevo.com/thumb/cms/14B0DED478FA325E69075EA4212CE83A20158651859788.png","isrc":"GBA321500124","viewCount":218772,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":false,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"FFS","urlSafeName":"ffs"}],"featuredArtists":[],"associatedArtists":[],"categories":["Music Video"]},{"isPremiere":false,"title":"Call Girl (Official Video)","urlSafeTitle":"Call-Girl-(Official-Video)","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/7632e233e2a0028009de2941c591cf5b201514109722668.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/7632e233e2a0028009de2941c591cf5b201514109722668.jpg","isrc":"GBA321500103","viewCount":157114,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":false,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"FFS","urlSafeName":"ffs"}],"featuredArtists":[],"associatedArtists":[],"categories":["Music Video"]},{"isPremiere":false,"title":"No 1 Song / Michael (Live at Rock en Seine)","urlSafeTitle":"No-1-Song-Michael-(Live-at-Rock-en-Seine)","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/6d6cc502a4f15e81948a57fc12013040201561010319609.png","thumbnail":"http://img.cache.vevo.com/thumb/cms/6d6cc502a4f15e81948a57fc12013040201561010319609.png","isrc":"GBA321500211","viewCount":19307,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":true,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"FFS","urlSafeName":"ffs"}],"featuredArtists":[],"associatedArtists":[],"categories":["Live Performance"]},{"isPremiere":false,"title":"Police Encounters (Live at Rock en Seine)","urlSafeTitle":"Police-Encounters-(Live-at-Rock-en-Seine)","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/80848cda414de7e7b9956feab3cbbaa4201561010303537.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/80848cda414de7e7b9956feab3cbbaa4201561010303537.jpg","isrc":"GBA321500207","viewCount":15748,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":true,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"FFS","urlSafeName":"ffs"}],"featuredArtists":[],"associatedArtists":[],"categories":["Live Performance"]},{"isPremiere":false,"title":"Piss Off (Live at Rock en Seine)","urlSafeTitle":"Piss-Off-(Live-at-Rock-en-Seine)","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/4e397540292fc5c1be2943dc1c0c87f0201571073835795.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/4e397540292fc5c1be2943dc1c0c87f0201571073835795.jpg","isrc":"GBA321500206","viewCount":5907,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":true,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"FFS","urlSafeName":"ffs"}],"featuredArtists":[],"associatedArtists":[],"categories":["Live Performance"]},{"isPremiere":false,"title":"We Disappear","urlSafeTitle":"We-Disappear","thumbnailUrl":"http://img.cache.vevo.com/thumb/cms/f64414506e4e83e20f3133a2ccdfbf8a201615411595830.jpg","thumbnail":"http://img.cache.vevo.com/thumb/cms/f64414506e4e83e20f3133a2ccdfbf8a201615411595830.jpg","isrc":"GB7TY1677220","viewCount":11181,"hasLyrics":false,"isExplicit":false,"allowEmbed":true,"allowMobile":true,"isLive":false,"isOriginalContent":false,"isCertified":false,"isAudio":false,"primaryArtists":[{"name":"Martha Ffion","urlSafeName":"martha-ffion"}],"featuredArtists":[],"associatedArtists":[],"categories":["Music Video"]}],"facetCounts":[{"name":"artists","counts":{"totalArtistsForSearchTerm":3}},{"name":"videos","counts":{"totalVideosForSearchTerm":10}},{"name":"categories","counts":{"music Video":6,"live Performance":3,"audio":1}}],"query":"ff"}.videos;

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
      <div>
        <h1>Playlist Queue</h1>
        <h2>+ Add Video</h2>
        {this.props.queue.map(this.renderItem)}
        <h2>QUEUE - SEARCH</h2>
      </div>
    );
  }

  renderItem(item, key) {
    return (
      <div>
        <h1>Hit the queue</h1>
        <h3 onClick={this.addToQueue}>add</h3>
        <h3 onClick={this.popQueue}>pop</h3>
        <h5>here's the queue</h5>
        <div>
          {JSON.stringify(queue)}
        </div>
        <Link to="/">Search</Link>
      </div>
    );
  }
}
