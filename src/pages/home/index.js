import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <div style={{ background: "#030303" }}>
      <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Alter Bridge é uma banda americana de rock formada em 2004, em Orlando, Flórida. A banda surgiu como um novo projeto do guitarrista e compositor Mark Tremonti, do baterista Scott Phillips e seu antigo companheiro, o baixista Brian Marshall, com a pausa nas atividades de sua antiga banda Creed, quando esses três músicos contrataram Myles Kennedy, ex-vocalista do The Mayfield Four, e atual vocalista da banda de Slash, como vocalista principal e, mais tarde, também guitarrista. A sonoridade do Alter Bridge tem sido descrita como Hard Rock, Pós-Grunge, Metal Alternativo e às vezes Metal Progressivo, tendo a banda desde canções pesadas, mais ligadas ao Heavy Metal, até as mais leves e que são executadas em formato acústico nas apresentações ao vivo"}
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      
      </PageDefault>

    </div>
  );
}

export default Home;