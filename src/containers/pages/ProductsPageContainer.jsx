import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';

import { listProductsRequest } from '../../actions/products.js';

import ProductsPage from '../../components/pages/ProductsPage.jsx';

@connect(mapStateToProps, null)
export default class PaymentPageContainer extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    componentWillMount() {
        const { dispatch } = this.props;

        dispatch(listProductsRequest());
    }

    render() {
        return (
            <ProductsPage />
        );
    }
}

function mapStateToProps(state) {
    return {
        productsList: state.productsList,
        totalCount: state.totalCount
    };
}
