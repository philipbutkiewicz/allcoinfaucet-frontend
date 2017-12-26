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
import ReactDOM from 'react-dom';
import styles from './TrackBar.css';

export default class TrackBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            style: {
                width: '0%'
            },
            dragEnabled: false,
            mouseEntered: false
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            value: props.value,
            style: {
                width: props.value ? `${Math.round(props.value * 100)}%` : 0
            }
        });
    }

    onClick(evt) {
        this.setValues(evt.nativeEvent.offsetX);
        this.setState({
            dragEnabled: false
        });
    }

    onMouseMove(evt) {
        if (this.state.dragEnabled) {
            this.setValues(evt.nativeEvent.offsetX);
        }
    }

    onMouseEnter() {
        this.setState({
            mouseEntered: true
        });
    }

    onMouseLeave() {
        this.setState({
            mouseEntered: false,
            dragEnabled: false
        });
    }

    onDragEnable() {
        this.setState({
            dragEnabled: true
        });
    }

    onDragDisable() {
        this.setState({
            dragEnabled: false
        });
    }

    setValues(offsetX) {
        const rect = ReactDOM.findDOMNode(this.refs.trackBar).getBoundingClientRect();
        const val = Math.round((offsetX / rect.width) * 100) / 100;

        this.setState({
            value: val
        });

        if (this.props.onChange) {
            this.props.onChange(val);
        }
    }

    render() {
        const enlarged = this.state.mouseEntered ? styles.trackBarEnlarged : '';

        return (
            <div
                className={`${styles.trackBar} ${enlarged}`}
                onClick={this.onClick.bind(this)}
                onMouseMove={this.onMouseMove.bind(this)}
                onMouseDown={this.onDragEnable.bind(this)}
                onMouseUp={this.onDragDisable.bind(this)}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                ref="trackBar"
            >
                <div
                    className={`${styles.trackBarInner} ${enlarged}`}
                    style={this.state.style}
                />
            </div>
        );
    }
}

TrackBar.defaultProps = {
    value: 0,
    onChange: null
};

TrackBar.propTypes = {
    value: React.PropTypes.number,
    onChange: React.PropTypes.func
};
