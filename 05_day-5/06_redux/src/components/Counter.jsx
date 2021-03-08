import { connect } from 'react-redux';

const Counter = (props) => {
    
    return (
        <div>
            <h3 style={{ backgroundColor: 'red' }}>Product amount: { props.products }</h3>
        </div>        
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Counter);