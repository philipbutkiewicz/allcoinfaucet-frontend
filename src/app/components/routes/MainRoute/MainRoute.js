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

import Button from '../../UIKit/Button';
import CurrencySelector from './components/CurrencySelector';
import AddressInput from './components/AddressInput';

import Api from '../../../api';

import style from './MainRoute.css';

class MainRoute extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            currency: null,
            address: null,
            complete: false,
            error: false,
            msg: null
        };

        this.state = JSON.parse(JSON.stringify(this.initialState));
    }

    onSelectCurrency(currency) {
        Api.getAvailableCurrencies((currencies) => {
            this.setState({
                currency: currencies[currency]
            });
        });
    }

    onFinishedAddressInput(address) {
        this.setState({
            address: address
        });
    }

    onContinueClick() {
        Api.claim(this.state.currency.currency.denomination, this.state.address, (response) => {
            this.setState({
                complete: true,
                error: !response || !response.success,
                msg: !response ? 'Uknown API error has occurred.' : response.msg
            });
        });
    }

    onResetClick() {
        this.setState(JSON.parse(JSON.stringify(this.initialState)));
    }

    render() {
        const currencySelector = !this.state.currency ? (
            <CurrencySelector onSelectCurrency={this.onSelectCurrency.bind(this)} />
        ) : '';

        const addressInput = !this.state.address && this.state.currency ? (
            <AddressInput currency={this.state.currency} onFinishedInput={this.onFinishedAddressInput.bind(this)} />
        ): '';

        const continueBlock = this.state.currency && this.state.address && !this.state.complete ? (
            <div>
                That's it! Now all you need to do is to complete the captcha and hit that "Claim" button!
                <Button onClick={this.onContinueClick.bind(this)} label="Claim" />
            </div>
        ) : '';
        
        const completeBlock = this.state.complete ? (
            <div>
                <div className={this.state.error ? style.error : style.success}>{this.state.msg}</div>
                <Button onClick={this.onResetClick.bind(this)} label={this.state.error ? 'Try again' : 'Go back'} />
            </div>
        ) : '';

        return (
            <div className={style.mainRoute}>
                {currencySelector}
                {addressInput}
                {continueBlock}
                {completeBlock}
            </div>
        );
    }
}

export default MainRoute;
