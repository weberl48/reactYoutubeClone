import React from 'react'
import VideoListItem from './video_list_item'
//because VideoList component has no need for state, it is a functional component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //key is used to give each video a unique identifier
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    )
  });
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList
