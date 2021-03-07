//import { ADD_PRODUCT, SUM_PRODUCT } from './Actions'
import * as actionTypes from './Actions';

const initialState = {
    productos: 10,
    activo: true
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                productos: state.productos + 1
            }
        case actionTypes.SUM_PRODUCT:
            return {
                ...state,
                productos: state.productos + action.value
            }
    }

    return state;
}

export default reducer;