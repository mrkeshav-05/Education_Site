import React from 'react'
import ReactPlayer from 'react-player/lazy';
const VideoPage = (props) => {
  // ReactPlayer.canPlay(url)

  return (
    <section>
      <h1>Hello word</h1>
      <ReactPlayer 
      url={props.item.videoId} 
      controls={true}
      
      />
    </section>
  )
}

export default VideoPage