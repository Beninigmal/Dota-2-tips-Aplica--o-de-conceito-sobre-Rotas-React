import React from 'react';
import './style.css';
import voltar from '../../img/voltar.png';
import { Link } from 'react-router-dom';

function Button() {
    return (
        <Link to="/">
            <img className="btn" src={voltar} alt="Botão de voltar" />
        </Link>

    );
}

export default Button;