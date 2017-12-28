// All Coin Faucet v1.0.0
// Copyright (c) 2017 by Philip Butkiewicz aka. bagnz0r
//
// ----------------------
// <http://allcoinfaucet.eu>
// ----------------------
//
// This file is part of All Coin Faucet.
//
// All Coin Faucet is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License.
//
// All Coin Faucet is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with All Coin Faucet. If not, see <http://www.gnu.org/licenses/>.
//

import React from 'react';
import { Route, Link } from 'react-router-dom';

import MainRoute from './app/components/routes/MainRoute';
import PaymentsRoute from './app/components/routes/PaymentsRoute';
import AboutRoute from './app/components/routes/AboutRoute';

import style from './App.css';

const App = () => (
    <div className={style.app}>
        <header>
            <h1>All Coin Faucet</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/payments">Payments</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
        <div className={style.container}>
            <Route exact path="/" component={MainRoute} />
            <Route exact path="/payments" component={PaymentsRoute} />
            <Route exact path="/about" component={AboutRoute} />
        </div>
        <footer>
            Copyright &copy; 2017 by <a href="http://github.com/philipbutkiewicz">bagnz0r</a> &amp; collaborators.
            Front-end code is licensed under GPLv3 and available <a href="http://github.com/allcoinfaucet-frontend">here</a>.
            <div className={style.donations}>
                <b>Donations</b>
                <small>WmtxqenvZofexUXKMLu2C4KZuH6snh3V5RHhpyGkAjrHEgRduJJubm2756byc2gSFb38QginqGzQGFVCEeg54r4B1JoM9kn2y</small> (AEON)
            </div>
        </footer>
    </div>
);

export default App;
