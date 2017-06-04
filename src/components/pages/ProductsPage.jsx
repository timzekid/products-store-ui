import React, { Component, PropTypes } from 'react';
import ReactPaginate                   from 'react-paginate';
import FloatingActionButton            from 'material-ui/FloatingActionButton';
import ContentAddIcon                  from 'material-ui/svg-icons/content/add';

import ProductCard from '../ProductCard.jsx';

import styles from './ProductsPage.less';

export default class ProductsPage extends Component {
    static propTypes = {
        productsList       : PropTypes.array.isRequired,
        isMoreThanOnePage  : PropTypes.bool.isRequired,
        selectedPageNumber : PropTypes.number.isRequired,
        totalPagesNumber   : PropTypes.number.isRequired,
        onAddBtnClick      : PropTypes.func.isRequired,
        onExploreBtnClick  : PropTypes.func.isRequired,
        onPageChange       : PropTypes.func.isRequired
    };

    renderEmptyMessage = () => {
        return (
            <div>
                <span className={styles.emptyMessageHeader}>Press green button at the bottom and add a first
                    product</span>
                <span className={styles.emptyMessageSubHeader}>Add <span className={styles.emphasis}>more than 6 </span>
                     to reveal pagination :)</span>
            </div>
        );
    };

    render() {
        const {
            productsList,
            onAddBtnClick
        } = this.props;

        return (
            <div className={styles.pageWrapper}>
                <div className={styles.pageContainer}>
                    {
                        !productsList.length
                        ?
                            this.renderEmptyMessage()
                        :
                            null
                    }
                    <div className={styles.productsContainer}>
                        {
                            productsList.map(product =>
                                <ProductCard previewMode
                                    key               = {product.id}
                                    id                = {product.id}
                                    name              = {product.name}
                                    description       = {product.description}
                                    dateOfAddition    = {product.dateOfAddition}
                                    onExploreBtnClick = {this.props.onExploreBtnClick}
                                />
                            )
                        }
                    </div>
                    <FloatingActionButton secondary
                        className = {styles.fab}
                        onClick   = {onAddBtnClick}
                    >
                        <ContentAddIcon />
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
