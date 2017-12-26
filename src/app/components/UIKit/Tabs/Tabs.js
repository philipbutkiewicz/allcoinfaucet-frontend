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

import Tab from './components/Tab';
import styles from './Tabs.css';

export default class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTabId: null
        };
    }

    componentDidMount() {
        this.setState({
            activeTabId: this.getFirstTabId()
        });
    }

    getFirstTabId() {
        const child = this.props.children.find((child) => child.props.isActive);
        
        return child ? child.props.id : null;
    }

    onTabClick(id) {
        this.setState({
            activeTabId: id
        });
    }

    render() {
        const tabs = React.Children.map(this.props.children, (child) => {
            return (
                <Tab
                    id={child.props.id}
                    label={child.props.label}
                    onClick={this.onTabClick.bind(this)}
                    isActive={this.state.activeTabId === child.props.id}
                />
            );
        });

        const tabContent = this.state.activeTabId ? this.props.children.find((child) => child.props.id === this.state.activeTabId).props.children : null;

        return (
            <div className={styles.tabs}>
                {tabs}
                <div className={styles.tabContent}>
                    {tabContent}
                </div>
            </div>
        );
    }

}
