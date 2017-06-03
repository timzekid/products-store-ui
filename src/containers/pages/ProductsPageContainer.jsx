import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';

import { listProductsRequest } from '../../actions/products.js';

import ProductsPage from '../../components/pages/ProductsPage.jsx';

@connect(mapStateToProps, null)
export default class PaymentPageContainer extends Component {
    static propTypes = {
        productsList: PropTypes.array.isRequired,
        productsTotalCount: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    };

    componentWillMount() {
        const { dispatch } = this.props;

        dispatch(listProductsRequest());
    }

    render() {
        const {
            productsList,
            productsTotalCount
        } = this.props;

        return (
            <ProductsPage
                productsList={productsList}
                productsTotalCount={productsTotalCount}
            />
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        productsList: state.productsList,
        productsTotalCount: state.totalCount
    };
}
