import React from 'react';
import PageDefault from '../../components/PageDefault';
import json from '../../data/watch.json';
import styled from 'styled-components';

export const WatchContainer = styled.div`
    margin: 50px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .frame {
        height: 100%;
    }
`;

export const ResponsiveIframe = styled.iframe`
    position: relative;
    width: 100%;
    height: calc(100vh - 200px);
`;

function Watch() {
    var videoId = "https://www.youtube.com/embed/" + json.id +"?autoplay=1";
    console.log(videoId)
    return (
        <PageDefault>
            <WatchContainer>
            <ResponsiveIframe
                title="Titulo do Iframe"
                src={videoId}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            </WatchContainer>
        </PageDefault>
        
    )
}   

export default Watch;