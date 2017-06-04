import React, { Component, PropTypes } from 'react';

import ProductCard from '../ProductCard.jsx';

import styles from './ProductPage.less';

export default class ProductPage extends Component {
    static propTypes = {
        productInfo      : PropTypes.object.isRequired,
        onDeleteBtnClick : PropTypes.func.isRequired,
        onEditBtnClick   : PropTypes.func.isRequired
    };

    render() {
        const {
            id,
            name,
            description,
            dateOfAddition,
            color
        } = this.props.productInfo;

        return (
            <div className={styles.pageWrapper}>
                <div className={styles.pageContainer}>
                    <ProductCard
                        id                = {id}
                        name              = {name}
                        description       = {description}
                        dateOfAddition    = {dateOfAddition}
                        color             = {color}
                        onDeleteBtnClick  = {this.props.onDeleteBtnClick}
                        onEditBtnClick    = {this.props.onEditBtnClick}
                    />
                </div>
            </div>
        );
    }
}
