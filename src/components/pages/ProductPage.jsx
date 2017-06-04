import React, { Component, PropTypes } from 'react';

import ProductCard from '../ProductCard.jsx';

import styles from './ProductPage.less';

export default class ProductPage extends Component {
    static propTypes = {
    };

    render() {
        const {
            name,
            description,
            dateOfAddition,
            color
        } = this.props.productInfo;

        return (
            <div className={styles.pageWrapper}>
                <div className={styles.pageContainer}>
                    <ProductCard
                        name              = {name}
                        description       = {description}
                        dateOfAddition    = {dateOfAddition}
                        color             = {color}
                    />
                </div>
            </div>
        );
    }
}
