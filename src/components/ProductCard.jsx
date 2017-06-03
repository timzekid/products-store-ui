import React, { Component, PropTypes } from 'react';
import Paper                           from 'material-ui/Paper';
import FlatButton                      from 'material-ui/FlatButton';

import styles from './ProductCard.less';

export default class ProductCard extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        dateOfAddition: PropTypes.string
    };

    render() {
        return (
            <Paper className={styles.paper} >
                <div className={styles.header}>
                    <h5>{this.props.name}</h5>
                </div>
                <div className={styles.content}>
                    {this.props.dateOfAddition}
                </div>
                <FlatButton
                    primary
                    className = {styles.exploreBtn}
                    label     = 'Explore'
                />
            </Paper>
        );
    }
}
