import React from 'react';
import './VideoItem.css';



const VideoItem = ({video,onClickVideo}) => {

    //console.log(`inside videoitem`, video);


    return (
            <div className="videoItem item" onClick={()=>onClickVideo(video)}>
                <img className="ui image videoImage" src={video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="description">
                    {video.snippet.title}
                    </div>
                </div>
            </div>
        )
}

export default VideoItem;