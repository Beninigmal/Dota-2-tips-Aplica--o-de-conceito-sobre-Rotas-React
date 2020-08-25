import React from 'react';
import '../TopBar/style.css';
import dota from '../../img/logo_dota.png';

function TopBar() {
    return (
        <header>
            <div className="dota">
                <img  src={dota} alt="Logo Dota 2" />
                <h1>Dota 2</h1>
            </div>
            <h3>Escolha sua posição</h3>
        </header>
    );
}

export default TopBar;