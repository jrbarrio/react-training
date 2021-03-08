//import { ADD_PRODUCT, ADD_PRODUCTS } from './Actions'
import * as actionTypes from './Actions';

const initialState = {
    products: 10,
    active: true
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: state.products + 1
            }
        case actionTypes.ADD_PRODUCTS:
            return {
                ...state,
                products: state.products + action.value
            }
    }

    return state;
}

export default reducer;