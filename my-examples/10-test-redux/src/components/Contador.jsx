import { connect } from 'react-redux';

const Contador = (props) => {
    
    return (
        <div>
            <h3 style={{ backgroundColor: 'red' }}>Numero de productos: { props.numProd }</h3>
        </div>        
    );
}

const mapStateToProps = state => {
    return {
        numProd: state.productos
    }
}

export default connect(mapStateToProps)(Contador);