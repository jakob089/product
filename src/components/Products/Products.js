import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return (
            <div>
                <Link to="/product/add" className="btn btn-success mb-10">Add product</Link>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Products</h3>
                    </div>
                    <div className="panel-body">

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

export default Products;