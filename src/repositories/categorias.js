import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIAS)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      return resposta;
    });
}

export default {
  getAllWithVideos,
};
