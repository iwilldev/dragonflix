import React from 'react';
import Logo from '../../assets/img/Logo.png'
import ButtonLink from './ButtonLink'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo Dragonflix" />
            </a>
            <ButtonLink className="ButtonLink" href="/">Novo Vídeo</ButtonLink>
        </nav>
    )
}

export default Menu;