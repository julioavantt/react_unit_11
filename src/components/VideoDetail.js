import React from 'react';

const VideoDetail = ({ video }) => {
   if(!video) return <div>Loading...</div>;

   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

   return (
      <React.Fragment>
         <div className="ui embed">
            <iframe title="video player" src={videoSrc} />
         </div>
         <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
         </div>
      </React.Fragment>
   );
}

export default VideoDetail;