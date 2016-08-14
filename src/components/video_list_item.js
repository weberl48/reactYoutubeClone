import React from 'react'
//es6 {video} means the first object in the arguments array has a property of video, grab that video and declare a new variable called video. Same as const video = props.video
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title
  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item' >
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl}/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>{videoTitle}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem
