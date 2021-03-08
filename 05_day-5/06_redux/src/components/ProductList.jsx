import { connect } from 'react-redux';
import { ADD_PRODUCT, ADD_PRODUCTS } from '../store/Actions'

const ProductList = (props) => {
    
    return (
        <div>
            <h3>Product amount: { props.products }</h3>
            <button onClick={ props.onAddProduct }>Add 1 product</button>
            <button onClick={ () => props.onAddProducts(5) }>Add 5 products</button>
        </div>        
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddProduct: () => dispatch({ type: ADD_PRODUCT }),
        onAddProducts: (num) => dispatch({ 
            type: ADD_PRODUCTS ,
            value: num 
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);