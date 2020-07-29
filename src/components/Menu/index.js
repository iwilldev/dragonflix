import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo Dragonflix" />
            </Link>
            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">Novo Vídeo</ButtonLink>
        </nav>
    )
}

export default Menu;