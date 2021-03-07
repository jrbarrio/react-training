import { connect } from 'react-redux';
import { ADD_PRODUCT, SUM_PRODUCT } from '../store/Actions'

const ListaProductos = (props) => {
    
    return (
        <div>
            <h3>Numero de productos: { props.numProd }</h3>
            <button onClick={ props.onAddProducts }>Otro producto</button>
            <button onClick={ () => props.onSumProducts(5) }>Suma 5 productos</button>
        </div>        
    );
}

const mapStateToProps = state => {
    return {
        numProd: state.productos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddProducts: () => dispatch({ type: ADD_PRODUCT }),
        onSumProducts: (num) => dispatch({ 
            type: SUM_PRODUCT ,
            value: num 
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaProductos);