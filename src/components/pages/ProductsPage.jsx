import React, { Component, PropTypes } from 'react';
import ReactPaginate                   from 'react-paginate';
import FloatingActionButton            from 'material-ui/FloatingActionButton';
import ContentAdd                      from 'material-ui/svg-icons/content/add';

import ProductCard from '../ProductCard.jsx';

import styles from './ProductsPage.less';

export default class ProductsPage extends Component {
    static propTypes = {
        productsList       : PropTypes.array.isRequired,
        isMoreThanOnePage  : PropTypes.bool.isRequired,
        selectedPageNumber : PropTypes.number.isRequired,
        totalPagesNumber   : PropTypes.number.isRequired,
        onAddBtnClick      : PropTypes.func.isRequired,
        onPageChange       : PropTypes.func.isRequired
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

                    {
                        this.props.isMoreThanOnePage
                        ?
                            <ReactPaginate
                                marginPagesDisplayed = {2}
                                pageRangeDisplayed   = {3}
                                containerClassName   = {styles.paginationContainer}
                                pageClassName        = {styles.paginationPage}
                                previousClassName    = {styles.paginationPrev}
                                nextClassName        = {styles.paginationNext}
                                activeClassName      = {styles.paginationActivePage}
                                forceSelected        = {this.props.selectedPageNumber}
                                pageNum              = {this.props.totalPagesNumber}
                                clickCallback        = {this.props.onPageChange}
                            />
                        :
                            null
                    }
                </div>
            </div>
        );
    }
}
