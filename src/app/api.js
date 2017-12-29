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

class Api {

    static init() {
        this.wsUrl = 'http://localhost:9000/app.php';
    }

    static getAvailableCurrencies(callback) {
        this.init();
        this.makeApiCall('getAvailableCurrencies', callback);
    }

    static claim(currency, address, callback) {
        this.init();
        this.makeApiCall('claim', callback, address, currency);
    }

    static makeApiCall(action, callback, ...args) {
        let url = `${this.wsUrl}/?action=${action}&arg=`;
        for (const arg of args) {
            url += arg;

            if (args.indexOf(arg) !== (args.length - 1)) {
                url += ':';
            }
        }

        fetch(url).then((response) => {
            return response.json().then((json) => {
                callback(json);
            });
        }).catch((error) => {
            callback(false);
        });
    }
}

export default Api;