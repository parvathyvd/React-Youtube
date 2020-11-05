import React from 'react';
import './VideoContent.css'

const VideoContent = ({video}) => {
if(!video){
    return (
        <div className="loading"><p>Please search something and select a video from the list to play it</p></div>
    )
}

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div className="videoContent">
            <div className="ui embed">
                <iframe width="560" height="315" src={videoSrc} height="450"/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoContent