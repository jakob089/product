import React, { Component } from 'react';
import Products from '../../components/Products/Products';
import Product from '../../components/Products/Product';
import { connect } from 'react-redux';
import * as Actions from './../../actions/index';


class ProductPage extends Component {

    componentDidMount() {
        this.props.onFetchProducts()
    }

    showProducts = (products) => {
        let { onDeleteProduct } = this.props;
        let result;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product key={index} product={product} index={index} onDeleteProduct={onDeleteProduct} />
                )
            })
        }
        return result;
    }

    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProducts: () => {
            dispatch(Actions.actFetchProductsRequest())
        },
        onDeleteProduct: (id) => {
            dispatch(Actions.actDeleteProductsRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);