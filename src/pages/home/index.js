/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const Loading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
  `;

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<Loading><h1>Loading...</h1></Loading>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          console.log(dadosIniciais[0].videos[0])
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
