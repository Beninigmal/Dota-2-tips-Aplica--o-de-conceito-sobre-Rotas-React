import React from 'react';
import './style.css';
import Button from '../Button';

function Core() {
    return (
        <section >
            <div className="core">
                <div className="btn-pos">
                    <Button />
                </div>
                <div className="square">
                    <h1>Core</h1>
                    <p>A 'role' core, é quem tem maior foco no farm e que vai ter maior impacto no 'late game'. Vence o game o core que consegue comprar o maior número de itens no menor período de tempo. Os cores são divididos em 3, cada um com uma prioridade de 'farm' e sendo conhecidos como posição 1 para o 'Hard Carry', a posição 2 para o 'Mid laner', e a posição 3 para o 'Off laner.' </p>
                </div>

                <div className="core-list">
                    <ul className="core-comp">
                        <li>Hard Carry</li>
                        <li>Mid Laner</li>
                        <li>Off laner</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}


export default Core;