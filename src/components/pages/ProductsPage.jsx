import React, { Component, PropTypes } from 'react';

import ProductCard from '../ProductCard.jsx';

import styles from './ProductsPage.less';

export default class ProductsPage extends Component {
    static propTypes = {
        productsList: PropTypes.array.isRequired
    };

    render() {
        const {
            productsList
        } = this.props;

        return (
            <div className={styles.pageWrapper}>
                <div className={styles.pageContainer}>
                    <div className={styles.productsContainer}>
                        {
                            productsList.map(product =>
                                <ProductCard
                                    key={product.id}
                                    name={product.name}
                                    dateOfAddition={product.dateOfAddition}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
