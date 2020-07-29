import React from 'react';
import { useHistory } from 'react-router-dom'
import { VideoCardContainer } from './styles';
import json from '../../../../data/watch.json';
import { VideoCardBanner } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  const videoId = videoURL.substr(32,42);
  const history = useHistory();
  const navigateTo = () => {
    json.id = videoId;
    console.log("ID: " + videoId + "/ JSON: " + json.id)
    history.push('/watch')
  };

  return (
    <VideoCardContainer
      url={image}
      onClick={navigateTo}
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >

      <VideoCardBanner style={{ backgroundColor: categoryColor || 'red' }}> 
      

            {videoTitle} 
      
      </VideoCardBanner> 
    </VideoCardContainer>
  );
}

export default VideoCard;
