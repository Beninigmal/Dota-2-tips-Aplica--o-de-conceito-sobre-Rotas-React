import React from 'react';
import './style.css';
import Button from '../Button';

function Support() {
    return (
        <section >
            <div className="support">
                <div className="btn-pos">
                    <Button />
                </div>
                <div className="square">
                    <h1>Suporte</h1>
                    <p>A 'role' suporte, e essencial para o progresso da partida, eles determinam como os seus cores vão conseguir levantar patrimônio o mais rápido para entrar em lutas. Uma das funções essenciais do support é dar visão evitando ganks desnecessários, incomodar os inimigos com suas habilidades mais fortes e o mais importante, prestar atenção em tudo no mapa, pois os cores estaram concentrados demais em fechar seus items.</p>
                </div>

                <div className="sup-list">
                    <ul className="sup-comp">
                        <li>Fácil</li>
                        <li>Intermediário</li>
                        <li>Complexo</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}


export default Support;