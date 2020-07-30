import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);

    function setValor(prop, data) {
        setValores({
            ...valores,
            [prop]: data
        })
    }

    function handleValor(data) {
        const { getAttribute, value} = data.target;
        setValor(getAttribute('name'), value);
    }

    return (
        <PageDefault>
        <h1>Cadastro de Categoria: {valores.nome}</h1>

        <form onSubmit={function handleSubmit(data){
            data.preventDefault();
            setCategorias([
                ...categorias,
                valores
            ]);
            setValores(valoresIniciais)
        }}>

            <FormField
                label="Nome da Categoria:"
                type="text"
                name="nome"
                value={valores.nome}
                onChange={handleValor}
            />
            <FormField
                label="Descrição:"
                type="text"
                name="descricao"
                value={valores.descricao}
                onChange={handleValor}
            />
            <FormField
                label="Cor:"
                type="color"
                name="cor"
                value={valores.cor}
                onChange={handleValor}
            />
            

            <button>
            Cadastrar
            </button>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
                return (
                    <li key={`${categoria}${indice}`}>{categoria.nome}</li>
                )
            })}
        </ul>

        <Link to="/">
            Ir para home
        </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;