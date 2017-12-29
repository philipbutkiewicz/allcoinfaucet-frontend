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

import React, { Component } from 'react';

class AboutRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <p>
                    <b>All Coin Faucet</b> was created from the ashes of previously very popular (in 2013 and 2014) <b>Litecoin Faucet</b> and <b>All Coin Faucet</b>
                    with the goal of building awareness about LTC and BTC.
                </p>
                <p>
                    Today we are coming back to spread the word and help build a little bit more obscure cryptocurrencies in hopes of creating a
                    more competetive and diverse cryptocurrency universe... Is there a better way to do that than handing out free coin and teaching people how can it be spent?
                </p>
                <p>
                    Our plan is to gradually add new cryptocurrencies to our offering while steering a clear focus on two coins that are taking off in a big way - <b>AEON</b>
                    and it&#39;s bigger brother <b>XMR</b>.
                </p>
                <p>
                    This website is supported mostly by donations (hence no ads, for now) and has strong roots in the
                    <a href="http://aeonminingpool.com">AEONMiningPool.com</a> community.
                </p>
            </div>
        );
    }
}

export default AboutRoute;
