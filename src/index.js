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
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    (
        <div>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    ),
    document.getElementById('root')
);
