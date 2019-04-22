import * as Types from './../constants/ActionTypes';

var initialState = [];


// var s4 = () => {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }

// var randomID = () => {
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
// }

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

const myReducer = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id)
            state.splice(index, 1)
            return [...state]
        case Types.GET_PRODUCT_BASE_ON_ID_TO_EDIT:
            state = action.product
            return state
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id)
            state[index] = action.product
            return [...state]
        default:
            return [...state];
    }
}

export default myReducer;