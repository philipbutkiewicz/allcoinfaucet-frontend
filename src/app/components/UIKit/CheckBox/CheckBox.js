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

import styles from './CheckBox.css';

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            checked: props.checked
        });
    }

    onClick() {
        this.setState({
            checked: !this.state.checked
        });

        if (this.state.checked && this.props.onChecked) {
            this.props.onChecked();
        } else if (this.props.onUnChecked) {
            this.props.onUnChecked();
        }
    }

    render() {
        const classNames = `${styles.checkBox} ${this.state.checked ? styles.checkBoxChecked : ''} ${this.props.isInline ? styles.checkBoxInline : ''}`;

        return (
            <div className={classNames}>
                <button className={styles.checkBoxInner} onClick={this.onClick.bind(this)} />
                {this.props.label}
            </div>
        );
    }
}

CheckBox.defaultProps = {
    checked: false,
    label: null,
    isInline: false,
    onChecked: null,
    onUnChecked: null
};

CheckBox.propTypes = {
    checked: React.PropTypes.bool,
    label: React.PropTypes.string,
    isInline: React.PropTypes.bool,
    onChecked: React.PropTypes.func,
    onUnChecked: React.PropTypes.func
};

export default CheckBox;
