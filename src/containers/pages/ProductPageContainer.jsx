import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import {
    showProductRequest,
    deleteProductRequest,
    showEditProductModal,
    closeEditProductModal,
    updateProductRequest,
    changeProductsOffset
} from '../../actions/products.js';

import ProductPage             from '../../components/pages/ProductPage.jsx';
import ProductInteractionModal from '../../components/ProductInteractionModal.jsx';

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductPageContainer extends Component {
    static propTypes = {
        history                 : PropTypes.object.isRequired,
        params                  : PropTypes.object.isRequired,
        productInfo             : PropTypes.object.isRequired,
        errorDuringEdition      : PropTypes.object.isRequired,
        isEditProductModalShown : PropTypes.bool.isRequired,
        showProductRequest      : PropTypes.func.isRequired,
        showEditProductModal    : PropTypes.func.isRequired,
        closeEditProductModal   : PropTypes.func.isRequired,
        deleteProductRequest    : PropTypes.func.isRequired,
        updateProductRequest    : PropTypes.func.isRequired,
        changeProductsOffset    : PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.showProductRequest({ id: this.props.params.id });
    }

    handleDeleteBtnClick = (payload) => {
        this.props.changeProductsOffset({ nextOffset: 0 });
        this.props.history.push('/');

        this.props.deleteProductRequest(payload);
    };

    render() {
        const { productInfo, isEditProductModalShown } = this.props;

        if (!productInfo) {
            return (<span>Loading...</span>);
        }

        return (
            <div>
                <ProductPage
                    productInfo        = {productInfo}
                    onDeleteBtnClick   = {this.handleDeleteBtnClick}
                    onEditBtnClick     = {this.props.showEditProductModal}
                />
                {
                    isEditProductModalShown
                    ?
                        <ProductInteractionModal
                            isOpen                = {isEditProductModalShown}
                            title                 = {`Edit ${productInfo.name} product`}
                            submitBtnLabel        = 'Save'
                            cancelBtnLabel        = 'Cancel'
                            nameInputValue        = {productInfo.name}
                            descriptionInputValue = {productInfo.description}
                            selectedColorValue    = {productInfo.color}
                            productId             = {productInfo.id}
                            error                 = {this.props.errorDuringEdition}
                            onSubmitBtnClick      = {this.props.updateProductRequest}
                            onCancelBtnClick      = {this.props.closeEditProductModal}
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
        productInfo             : state.products.productsList[0],
        errorDuringEdition      : state.products.errorDuringEdition,
        isEditProductModalShown : state.modals.isEditProductModalShown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showProductRequest    : bindActionCreators(showProductRequest, dispatch),
        deleteProductRequest  : bindActionCreators(deleteProductRequest, dispatch),
        showEditProductModal  : bindActionCreators(showEditProductModal, dispatch),
        closeEditProductModal : bindActionCreators(closeEditProductModal, dispatch),
        updateProductRequest  : bindActionCreators(updateProductRequest, dispatch),
        changeProductsOffset  : bindActionCreators(changeProductsOffset, dispatch)
    };
}
