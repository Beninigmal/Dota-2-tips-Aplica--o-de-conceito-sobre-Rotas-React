import React from 'react';
import '../Home/style.css';
import { Link } from 'react-router-dom';
import Topbar from '../TopBar';

function Home() {
    return (
        <section>
            <Topbar />
            <ul className="roles">
                <Link to="/supp">
                    <li className="kotl">
                        <div className="content-sup">
                            <h1>Suporte</h1>
                        </div>
                    </li>
                </Link>
                <Link to="/core">
                    <li className="pa">
                        <div className="content-core">
                            <h1>Core</h1>
                        </div>
                    </li>
                </Link>
            </ul>
        </section>
    );
}

export default Home;