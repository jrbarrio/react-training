export default function Carrito({ productos }) {

    function calcularTotal() {
        let resultado = 0;
        for (let producto of productos) {
            resultado += producto.price;
        }
        return resultado;
    }

    return (
        <div className="carrito">
            <p>TOTAL: {calcularTotal()}</p>
            <ul className="list-group">
                {productos.map(producto => (
                    <li className="list-group-item">{producto.name} - {producto.price}€</li>
                ))}
            </ul>
        </div>
    );
}