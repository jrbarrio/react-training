export default function ProductoCard(props) {
    return (
        <div className="producto">
            <h5>{props.name}</h5>
            <img src={props.image} alt="" />
            <p>{props.price}</p>
            <button
                className="btn btn-primary"
                onClick={props.productoPulsado}>
                Comprar
            </button>
        </div>
    );
}