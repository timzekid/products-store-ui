import React, { Component, PropTypes } from 'react';
import FloatingActionButton            from 'material-ui/FloatingActionButton';
import ContentAdd                      from 'material-ui/svg-icons/content/add';

import ProductCard from '../ProductCard.jsx';

import styles from './ProductsPage.less';

export default class ProductsPage extends Component {
    static propTypes = {
        productsList: PropTypes.array.isRequired,
        onAddBtnClick: PropTypes.func.isRequired
    };

    render() {
        const {
            productsList,
            onAddBtnClick
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
                    <FloatingActionButton secondary
                        className={styles.fab}
                        onClick={onAddBtnClick}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}
