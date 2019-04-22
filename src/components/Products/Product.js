import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Product extends Component {

    onDeleteProduct = () => {
        let { product } = this.props;
        this.props.onDeleteProduct(product.id)
    }    

    render() {
        let { product, index } = this.props;        
        let status = product.status ? 'Active' : 'DeActive';
        let statusClass = product.status ? 'success' : 'info';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{status}</span>
                </td>
                <td>
                    <Link to={`/product/edit/${product.id}`} type="button" className="btn btn-warning mr-10">Edit</Link>
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteProduct}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Product;