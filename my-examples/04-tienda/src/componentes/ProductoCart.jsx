export default function ProductoCart(props) {
    return (
        <div className="producto">
            <h5>{ props.name }</h5>
            <img src={ props.image }></img>
            <p>{ props.price }</p>
        </div>
    );
}