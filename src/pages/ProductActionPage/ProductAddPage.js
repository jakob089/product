import React, { Component } from 'react';
import * as Actions from './../../actions/index';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ProductAddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPrice: '',
            cbStatus: false
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        let { history } = this.props
        let product = {
            name: this.state.txtName,
            price: this.state.txtPrice,
            status: this.state.cbStatus
        }
        e.preventDefault()
        this.props.onAddProduct(product)
        history.goBack()
    }
    render() {
        let { txtName, txtPrice, cbStatus } = this.state;
        return (

            <div className="container">
                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onSave}>
                            <legend>Form Add Product</legend>

                            <div className="form-group">
                                <label for="txtName">Name</label>
                                <input type="text" className="form-control" placeholder="Enter Name" id="txtName" name="txtName" onChange={this.onChange} value={txtName} />
                            </div>
                            <div className="form-group">
                                <label for="txtPrice">Price</label>
                                <input type="number" className="form-control" placeholder="Enter Price" id="txtPrice" name="txtPrice" onChange={this.onChange} value={txtPrice} />
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value={cbStatus} name="cbStatus" onChange={this.onChange} />
                                    Active
                  </label>
                            </div>
                            <Link to="/product-list" type="submit" className="btn btn-warning mr-10">Back</Link>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>

                </div>

            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(Actions.actAddProductsRequest(product))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductAddPage);