import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';

import {
    showProductRequest
} from '../../actions/products.js';

import ProductPage from '../../components/pages/ProductPage.jsx';

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductPageContainer extends Component {
    static propTypes = {
    };

    componentWillMount() {
        this.props.showProductRequest({ id: this.props.params.id });
    }

    render() {
        if (!this.props.productInfo) {
            return (<span>Loading...</span>);
        }

        return (
            <div>
                <ProductPage
                    productInfo={this.props.productInfo}
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
        showProductRequest : bindActionCreators(showProductRequest, dispatch)
    };
}
