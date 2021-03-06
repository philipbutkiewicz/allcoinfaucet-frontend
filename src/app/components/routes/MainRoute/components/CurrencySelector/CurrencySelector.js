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

import Api from '../../../../../api';
import Button from '../../../../UIKit/Button';
import SelectBox from '../../../../UIKit/SelectBox';

import style from './CurrencySelector.css';

class CurrencySelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            availableCurrencies: {}
        };
    }

    componentDidMount() {
        Api.getAvailableCurrencies((currencies) => {
            this.setState({
                availableCurrencies: currencies
            });
        });
    }

    onSelectCurrency() {
        this.props.onSelectCurrency(this.selectBox.getValue());
    }

    render() {
        const currencies = Object.keys(this.state.availableCurrencies).map((value, index) => {
            return (
                <option value={value} key={index}>{value}</option>
            );
        });

        return (
            <div className={style.currencySelector}>
                Thank you for visiting <b>All Coin Faucet</b>! Let's begin by choosing the currency.
                <SelectBox ref={(selectBox) => this.selectBox = selectBox}>
                    {currencies}
                </SelectBox>
                <Button onClick={this.onSelectCurrency.bind(this)} label="Continue" />
            </div>
        );
    }

}

CurrencySelector.propTypes = {
    onSelectCurrency: React.PropTypes.func.isRequired
}

export default CurrencySelector;