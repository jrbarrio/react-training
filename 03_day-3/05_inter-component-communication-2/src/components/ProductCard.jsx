export default function ProductCard(props) {
    return (
        <div className="product">
            <h5>{ props.name }</h5>
            <img src={ props.image } alt="" />
            <p>{ props.price }</p>
            <button
                className="btn btn-primary"
                onClick={ props.productSelected }>
                Comprar
            </button>
        </div>
    );
}