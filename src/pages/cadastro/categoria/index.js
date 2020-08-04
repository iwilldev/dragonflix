import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#FF4B4B',
  };

  const { handleChange, values } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://dragonflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (resposta) => {
        const respostaJson = await resposta.json();
        setCategorias([
          ...respostaJson,
        ]);
      });
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        console.log(values);
        // setCategorias([
        //   ...categorias,
        //   values,
        // ]);

        categoriasRepository.create({
          titulo: values.nome,
          descricao: values.descricao,
          cor: values.cor,
        })
          .then(() => {
            history.push('/cadastro/video');
          });
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
