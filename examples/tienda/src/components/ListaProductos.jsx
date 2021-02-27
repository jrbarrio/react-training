import ProductoCard from "./ProductoCard";

export default function ListaProductos({ productos, titulo, productoComprado }) {

    function onProductoPulsado(pProducto) {
        productoComprado(pProducto);
    }

    return (
        <div>
            <h2>{titulo}</h2>
            <div className="productos">
                {productos.map(producto => {
                    return <ProductoCard
                        key={producto.id}
                        {...producto}
                        productoPulsado={() => onProductoPulsado(producto)}
                    />
                })}
            </div>
        </div>
    );
}