import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import {
    showProductRequest,
    deleteProductRequest
} from '../../actions/products.js';

import ProductPage from '../../components/pages/ProductPage.jsx';

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductPageContainer extends Component {
    static propTypes = {
        history              : PropTypes.object.isRequired,
        params               : PropTypes.object.isRequired,
        productInfo          : PropTypes.object.isRequired,
        showProductRequest   : PropTypes.func.isRequired,
        deleteProductRequest : PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.showProductRequest({ id: this.props.params.id });
    }

    handleDeleteBtnClick = (payload) => {
        this.props.history.push('/');

        this.props.deleteProductRequest(payload);
    };

    render() {
        const { productInfo } = this.props;

        if (!productInfo) {
            return (<span>Loading...</span>);
        }

        return (
            <div>
                <ProductPage
                    productInfo={productInfo}
                    onDeleteBtnClick={this.handleDeleteBtnClick}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        productInfo : state.products.productsList[0]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showProductRequest   : bindActionCreators(showProductRequest, dispatch),
        deleteProductRequest : bindActionCreators(deleteProductRequest, dispatch)
    };
}
