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
import TextBox from '../../../../UIKit/TextBox';

import style from './AddressInput.css';

class AddressInput extends Component {

    onFinishedInput() {
        const value = this.textBox.getValue();
        if (value.length !== this.props.currency.addressLength) {
            return;
        }

        this.props.onFinishedInput(this.textBox.getValue());
    }

    render() {
        return (
            <div className={style.addressInput}>
                <p>
                    Ok great! You've chosen <b>{this.props.currency.currency.denomination}</b>, great pick!
                    Now, we need to know where we should send some of that <b>{this.props.currency.currency.denomination}</b>.
                    Care to enter your wallet address?
                </p>
                <TextBox ref={(textBox) => this.textBox = textBox} />
                <Button onClick={this.onFinishedInput.bind(this)} label="Continue" />
            </div>
        );
    }

}

AddressInput.propTypes = {
    onFinishedInput: React.PropTypes.func.isRequired,
    currency: React.PropTypes.object.isRequired
}

export default AddressInput;