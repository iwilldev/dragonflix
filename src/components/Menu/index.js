import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './ButtonLink';
import './Menu.css';

function Menu() {
  let buttonRoute = '';
  let buttonText = '';

  if (window.location.href.includes('/video')) {
    buttonRoute = '/cadastro/categoria';
    buttonText = 'Nova Categoria';
  } else if (window.location.href.includes('/categoria') || (window.location.href.includes('/watch'))) {
    buttonRoute = '/';
    buttonText = 'Página Inicial';
  } else {
    buttonRoute = '/cadastro/video';
    buttonText = 'Novo Vídeo';
  }

  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Dragonflix" />
      </Link>
      <ButtonLink as={Link} className="ButtonLink" to={buttonRoute}>{buttonText}</ButtonLink>
    </nav>
  );
}

export default Menu;
