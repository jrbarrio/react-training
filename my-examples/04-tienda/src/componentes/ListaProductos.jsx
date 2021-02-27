import ProductoCart from "./ProductoCart";

export default function ListaProductos({ productos, titulo}) {
    
    function onProductoPulsado() {
        console.log('Producto pulsado')
    }
    
    return (
        <div>
            <h2>{ titulo }</h2>
            <div className="productos">
                { productos.map(producto => {
                    return <ProductoCart key={ producto.id } { ...producto } 
                        productoPulsado={ onProductoPulsado }
                    ></ProductoCart>;
                })}
            </div>
        </div>
    );
};{}