import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Actions from './../../actions/index';

class ProductEditPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPrice: '',
            cbStatus: false
        }
    }
    componentDidMount() {
        let { match } = this.props;
        let id = match.params.id;
        this.props.onGetProductBaseOnIdToEdit(id)



    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.productEditing.id)
        this.setState({
            txtName: nextProps.productEditing.name,
            txtPrice: nextProps.productEditing.price,
            cbStatus: nextProps.productEditing.status
        })
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
        e.preventDefault()
        let { match, history } = this.props;
        let id = match.params.id;
        let { txtName, txtPrice, cbStatus } = this.state;
        let product = {                        
            name: txtName,
            price: txtPrice,
            status: cbStatus
        }           
        this.props.onUpdateProduct(id, product)       
        history.goBack() 
    }
    render() {
        let { txtName, txtPrice, cbStatus } = this.state;
        return (

            <div className="container">
                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onSave}>
                            <legend>Form Edit Product</legend>

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
                                    <input type="checkbox" value={cbStatus} name="cbStatus" onChange={this.onChange} checked={cbStatus} />
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

const mapStateToProps = (state) => {
    return {
        productEditing: state.product        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProductBaseOnIdToEdit: (id) => {
            dispatch(Actions.actGetProductBaseOnIdToEditRequest(id))
        },
        onUpdateProduct: (id, product) => {
            dispatch(Actions.actUpdateProductRequest(id, product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditPage);