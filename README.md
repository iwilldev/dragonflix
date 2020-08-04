<h1 align="left">
  Dragonflix | Repositório de vídeos
</h1>

<h3 align="left">Resumo:</h3>
<p align="left">Projeto criado durante a #ImersãoReact da Alura, que consiste-se em um acervo de vídeos do YouTube escolhidos pelo usuário. Criei o Dragonflix, uma coletânea de vídeos de rock e metal.</p>
<img src="https://euwilliamgoncalves.github.io/img/portfolio/012/image01.png" width="650" />

<h3 align="left">Recursos utilizados:</h3>
<p align="left">Além do ReactJS, utilizamos JavaScript, Styled Components, CSS, React Slick, React Router Dom, Prop Types, JSON Server e Node.js.</p>
<img src="https://euwilliamgoncalves.github.io/img/portfolio/012/image02.png" width="650" />

<h3 align="left">Melhorias/UX:</h3>
<p align="left">
  Afim de otimizar a usabilidade do site, incluí:<br>
  - Banner com o título do vídeo que é exibido com o 'hover' do mouse, no desktop, e está sempre visível no mobile<br>
  - Exibição nativa do vídeo, sem redirecionamento para o site do YouTube.<br>
  - Alteração dinâmica do botão de menu, conforme o usuário navega pelas páginas.
  - Mudanças na estilização.<br>
  - Loading customizado na Home.<br>
  - Página 404 customizada.
</p>
<img src="https://euwilliamgoncalves.github.io/img/portfolio/012/image03.png" width="650" />

<h3 align="left">Responsividade:</h3>
<p align="left">O projeto foi estilizado para se adequar a dispositivos móveis, mantendo seu aspecto original e ajustando alguns pontos, como o link 'Novo Vídeo', a fim de garantir uma boa experiência ao usuário.</p>
<img src="https://euwilliamgoncalves.github.io/img/portfolio/012/image04.png" width="650" />

<h3 align="left">Demonstração:</h3>

<p align="left">O site está disponível em <a href="https://dragonflix.vercel.app/" target="_blank">dragonflix.vercel.app</a></p>

<h1 align="left">Exibição nativa dos vídeos (como eu fiz?):</h1>
<img src="https://euwilliamgoncalves.github.io/img/portfolio/012/image03.png" width="650" />

<h3 align="left">Passo 1 - Criar arquivo 'watch.json':</h3>

<p>Ele servirá para capturar a ID do vídeo selecionado.<br><b>src/data/watch.json</b></p>

```javascript
{
    "id": "sAYrAu-jnMY"
}
```

<h3 align="left">Passo 2 - Criar novo componente 'Watch':</h3>

<p><b>src/pages/watch/index.js</b></p>

```javascript
import React from 'react';
import PageDefault from '../../components/PageDefault';
import json from '../../data/watch.json'; // Arquivo criado para captura da ID do vídeo selecionado
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
    // A variável 'videoID' concatena o endereço padrão do vídeo com a ID do vídeo selecionado e a configuração adicional de autoplay
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
```

<h3 align="left">Passo 3 - Adicionar rota para o novo componente, editando o 'index.js':</h3>

<p><b>src/index.js</b></p>

```javascript
// importar novo componente
import Watch from './pages/watch'
  
// incluir nova rota, dentro do switch, logo abaixo da '/' que redireciona ao componente 'Home'
<Route path="/watch" component={Watch} /> 
```

<h3 align="left">Passo 4 - Editar componente 'Video Card':</h3>

<p><b>src/components/Carousel/components/VideoCard/index.js</b></p>

```javascript
// importar 'useHistory' para redirecionar ao novo componente, através do link
import { useHistory } from 'react-router-dom'
// importar 'watch.json' para atribuir ID do vídeo selecionado
import json from '../../../../data/watch.json'; 

// a função de renderização do Componente ficará como abaixo:

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  
  // videoId é gerada usando o método .substr() na string com a URL do vídeo, extraindo apenas o ID dele.
  const videoId = videoURL.substr(32,42);
  
  // history como função useHistory() para roteamento através do link
  const history = useHistory();
  
  // função navigateTo() que será invocada quando o card do vídeo for clicado (na propriedade onClick de 'VideoCardContainer')
  const navigateTo = () => {
    json.id = videoId; // 'watch.json' é editado e passa a ter o valor da ID do vídeo selecionado
    history.push('/watch') // Redirecionamento de rota para o componente Watch através da useHistory();
  };

  return (
    <VideoCardContainer
      url={image}
      onClick={navigateTo}
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
    </VideoCardContainer>
  );
}

```

<h3 align="left">Passo 5 - Editar botão mobile do componente 'BannerMain':</h3>

<p><b>src/components/BannerMain/index.js</b></p>

```javascript
// importar useHistory para redirecionar a rota e 'watch.json' para capturar a ID do vídeo
import { useHistory } from 'react-router-dom'
import json from '../../data/watch.json';

// adicionar abaixo da declaração da const 'bgUrl'
const history = useHistory();
  const navigateTo = () => {
    json.id = youTubeID;
    history.push('/watch')
  };
  
// alterar o componente 'WatchButton'
<WatchButton onClick={navigateTo}>
```

<h3 align="left">E é isso! A partir de agora, sua aplicação abre os vídeos de forma nativa, sem redirecionar para o YouTube.</h3>

<h1>Agradecimentos:</h1>
<p>Paulo Silveira, Mario Souto, Marco Bruno, Juliana Negreiros e toda equipe Alura envolvida nesse evento maravilhoso.<br>
Desejo que o Grande Arquiteto conspire a favor e eu possa ser aluno de vocês, muito em breve!</p>
