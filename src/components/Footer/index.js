import React from 'react';
import { FooterBase } from './styles';
import Wglogo from '../../assets/img/wglogo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      {' '}
      <a href="https://euwilliamgoncalves.github.io" style={{marginLeft: 20}}>
        <img src={Wglogo} alt="Logo William Gonçalves" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
