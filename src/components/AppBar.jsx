import React, { Component, PropTypes } from 'react';

import AppBarMui       from 'material-ui/AppBar';
import IconButton      from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';

import styles from './AppBar.less';

export default class AppBar extends Component {
    static propTypes = {
        showBackBtn: PropTypes.bool.isRequired,
        onBackBtnClick: PropTypes.func.isRequired
    }

    render() {
        const iconElementLeft = this.props.showBackBtn
            ?
            (
                <IconButton onClick={this.props.onBackBtnClick}>
                    <NavigationClose />
                </IconButton>
            )
            :
                <div />;

        return (
            <AppBarMui
                className       = {styles.appBar}
                iconElementLeft = {iconElementLeft}
                title           = 'Products store'
            />
        );
    }
}
