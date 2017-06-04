import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import {
    listProductsRequest,
    showAddProductModal,
    closeAddProductModal,
    addNewProductRequest,
    changeProductsOffset
} from '../../actions/products.js';

import ProductsPage            from '../../components/pages/ProductsPage.jsx';
import ProductInteractionModal from '../../components/ProductInteractionModal.jsx';

@connect(mapStateToProps, mapDispatchToProps)
export default class PaymentPageContainer extends Component {
    static propTypes = {
        errorDuringAddition    : PropTypes.object.isRequired,
        location               : PropTypes.object.isRequired,
        history                : PropTypes.object.isRequired,
        productsList           : PropTypes.array.isRequired,
        isAddProductModalShown : PropTypes.bool.isRequired,
        isMoreThanOnePage      : PropTypes.bool.isRequired,
        productsTotalCount     : PropTypes.number,
        limit                  : PropTypes.number.isRequired,
        totalPagesNumber       : PropTypes.number.isRequired,
        selectedPageNumber     : PropTypes.number.isRequired,
        listProductsRequest    : PropTypes.func.isRequired,
        addNewProductRequest   : PropTypes.func.isRequired,
        showAddProductModal    : PropTypes.func.isRequired,
        closeAddProductModal   : PropTypes.func.isRequired,
        changeProductsOffset   : PropTypes.func.isRequired
    };

    componentWillMount() {
        if (this.props.location.query.page) {
            this.props.changeProductsOffset({ nextOffset: this.props.limit * this.props.location.query.page });
        }

        this.props.listProductsRequest();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.search !== nextProps.location.search) {
            this.props.listProductsRequest();
        }
    }

    handlePageChange = ({ selected }) => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            query: { page: selected }
        });

        this.props.changeProductsOffset({ nextOffset: this.props.limit * selected });
    };

    handleExploreBtnClick = (productId) => {
        this.props.history.push(`/products/${productId}`);
    };

    render() {
        const { isAddProductModalShown } = this.props;

        return (
            <div>
                <ProductsPage
                    productsList       = {this.props.productsList}
                    productsTotalCount = {this.props.productsTotalCount}
                    isMoreThanOnePage  = {this.props.isMoreThanOnePage}
                    selectedPageNumber = {this.props.selectedPageNumber}
                    totalPagesNumber   = {this.props.totalPagesNumber}
                    onAddBtnClick      = {this.props.showAddProductModal}
                    onPageChange       = {this.handlePageChange}
                    onExploreBtnClick  = {this.handleExploreBtnClick}
                />
                {
                    isAddProductModalShown
                    ?
                        <ProductInteractionModal
                            isOpen           = {isAddProductModalShown}
                            title            = 'Add new product'
                            submitBtnLabel   = 'Add product'
                            cancelBtnLabel   = 'Cancel'
                            error            = {this.props.errorDuringAddition}
                            onSubmitBtnClick = {this.props.addNewProductRequest}
                            onCancelBtnClick = {this.props.closeAddProductModal}
                        />
                    :
                        null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const total = state.products.totalCount;
    const limit = state.products.limit;
    const offset = state.products.offset;

    const isMoreThanOnePage = total > limit;
    const totalPagesNumber = Math.ceil(total / limit);
    const selectedPageNumber = offset / limit;

    return {
        isMoreThanOnePage,
        totalPagesNumber,
        selectedPageNumber,
        limit,
        productsList           : state.products.productsList,
        productsTotalCount     : total,
        errorDuringAddition    : state.products.errorDuringAddition,
        isAddProductModalShown : state.modals.isAddProductModalShown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        listProductsRequest  : bindActionCreators(listProductsRequest, dispatch),
        addNewProductRequest : bindActionCreators(addNewProductRequest, dispatch),
        changeProductsOffset : bindActionCreators(changeProductsOffset, dispatch),
        showAddProductModal  : bindActionCreators(showAddProductModal, dispatch),
        closeAddProductModal : bindActionCreators(closeAddProductModal, dispatch)
    };
}
