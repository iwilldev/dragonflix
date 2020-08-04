/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import Watch from './pages/watch';
import PageDefault from './components/PageDefault';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/watch" component={Watch} />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={() => (
        <PageDefault>
          <div>
            <h1>Página 404</h1>
            <span>
              Acho que você se perdeu no caminho.
              <br />
              Clique no título acima e volte para a página inicial.
            </span>
          </div>
        </PageDefault>
      )}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
