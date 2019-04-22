import * as Types from './../constants/ActionTypes';
import callApi from '../utils/callApi';

// Fetch products from API and get data into store
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('product', 'GET', null).then(res => {            
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
/////////////////////////////////////////////////////////////////////////////////

// Add product to API and get data into store
export const actAddProductsRequest = (product) => {
    return (dispatch) => {
        return callApi('product', 'POST', product).then(res => {            
            dispatch(actAddProduct(res.data))
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,  
        product    
    }
}

///////////////////////////////////////////

// Delete product to API and get data into store
export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'DELETE', null).then(res => {            
            dispatch(actDeleteProduct(id))            
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,  
        id    
    }
}

///////////////////////////////////////////

// Get ID product
export const actGetProductBaseOnIdToEditRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'GET', null).then(res => {            
            dispatch(actGetProductBaseOnIdToEdit(res.data))                        
        })
    }
}

export const actGetProductBaseOnIdToEdit = (product) => {
    return {
        type: Types.GET_PRODUCT_BASE_ON_ID_TO_EDIT,  
        product
    }
}

///////////////////////////////////////////

// Get ID product
export const actUpdateProductRequest = (id, product) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'PUT', product).then(res => {            
            dispatch(actUpdateProduct(res.data))                        
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,  
        product
    }
}