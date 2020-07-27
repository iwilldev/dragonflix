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
    > {/* Abrir a tag do componente atual */}

      <VideoCardBanner style={{ backgroundColor: categoryColor || 'red' }}> 
      {/* abrir novo componente usando cor da categoria como background */}

            {videoTitle} {/* Título do vídeo como texto dentro da <p> */}
      
      </VideoCardBanner> {/* Fechar novo componente */}
    </VideoCardContainer> {/* Fechar componente atual */}
  );
}

export default VideoCard;
