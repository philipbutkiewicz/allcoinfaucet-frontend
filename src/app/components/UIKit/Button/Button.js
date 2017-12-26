// Ichigo UIKit v1.2.1
// Copyright (c) 2017 by Philip Butkiewicz aka. bagnz0r
//
// ----------------------
// <http://philipbutkiewicz.pl/ichigo-uikit>
// ----------------------
//
// This file is part of Ichigo UIKit.
// 
// Ichigo UIKit is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License.
//
// Ichigo UIKit is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Ichigo UIKit. If not, see <http://www.gnu.org/licenses/>.
//

import React, { Component } from 'react';
import styles from './Button.css';

export default class Button extends Component {

    render() {
        const icon = this.props.icon ? <i className={`fa ${this.props.icon}`} /> : '';
        return (
            <button className={styles.button} onClick={this.props.onClick}>
                {icon}
                {this.props.label}
            </button>
        );
    }

}

Button.defaultProps = {
    icon: null
};

Button.propTypes = {
    icon: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};
