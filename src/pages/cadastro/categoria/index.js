import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';



function CadastroCategoria() {

    const [categorias, setCategorias] = useState(['Teste']);
    const [nomeDaCategoria, setNomedaCategoria] = useState('Rock');

    return (
        <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

        <form onSubmit={function handleSubmit(data){
            data.preventDefault();
            console.log('Tentativa de envio');
            setCategorias([
                ...categorias,
                nomeDaCategoria
            ]);
        }}>

            <label>
            Nome da Categoria:
            <input
                type="text"
                placeholder={nomeDaCategoria}
                value={nomeDaCategoria}
                onChange={function handleNomeDaCategoria(data) {
                    setNomedaCategoria(data.target.value)
                }}
            />
            </label>

            <button>
            Cadastrar
            </button>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
                return (
                    <li key={`${categoria}${indice}`}>{categoria}</li>
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