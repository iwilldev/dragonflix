import React from 'react';
import { VideoCardContainer } from './styles';
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
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
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
