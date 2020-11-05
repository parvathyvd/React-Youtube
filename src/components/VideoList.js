import React from 'react';
import VideoContent from './VideoContent';
import VideoItem from './VideoItem';

const VideoList = (props) => {

   // console.log(props.videos);
    const indVideo = props.videos.map(video => {
        return <VideoItem video={video} key={video.id.videoId} onClickVideo={props.onClickVideo} />
    })

    return(
        <div className="ui list">
                {indVideo}
        </div>
    )
}

export default VideoList;