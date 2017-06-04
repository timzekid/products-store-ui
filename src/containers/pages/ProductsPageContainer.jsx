import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import {
    listProductsRequest,
    showAddProductModal,
    closeAddProductModal,
    addNewProductRequest
} from '../../actions/products.js';

import ProductsPage            from '../../components/pages/ProductsPage.jsx';
import ProductInteractionModal from '../../components/ProductInteractionModal.jsx';

@connect(mapStateToProps, mapDispatchToProps)
export default class PaymentPageContainer extends Component {
    static propTypes = {
        productsList           : PropTypes.array.isRequired,
        isAddProductModalShown : PropTypes.bool.isRequired,
        productsTotalCount     : PropTypes.number,
        listProductsRequest    : PropTypes.func.isRequired,
        addNewProductRequest   : PropTypes.func.isRequired,
        showAddProductModal    : PropTypes.func.isRequired,
        closeAddProductModal   : PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.listProductsRequest();
    }

    render() {
        const { isAddProductModalShown } = this.props;

        return (
            <div>
                <ProductsPage
                    productsList       = {this.props.productsList}
                    productsTotalCount = {this.props.productsTotalCount}
                    onAddBtnClick      = {this.props.showAddProductModal}
                />
                {
                    isAddProductModalShown
                    ?
                        <ProductInteractionModal
                            isOpen           = {isAddProductModalShown}
                            title            = 'Add new product'
                            submitBtnLabel   = 'Add product'
                            cancelBtnLabel   = 'Cancel'
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
    return {
        productsList           : state.products.productsList,
        productsTotalCount     : state.products.totalCount,
        isAddProductModalShown : state.modals.isAddProductModalShown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        listProductsRequest  : bindActionCreators(listProductsRequest, dispatch),
        addNewProductRequest : bindActionCreators(addNewProductRequest, dispatch),
        showAddProductModal  : bindActionCreators(showAddProductModal, dispatch),
        closeAddProductModal : bindActionCreators(closeAddProductModal, dispatch)
    };
}
