function Lista(props) {

    function crearLista() {
        let liProductos = [];
        for (let producto of props.productos) {
            liProductos.push(<li>{producto.nombre} - {producto.categoria}</li>);
        }
        let resultado = <ul>
            {liProductos}
        </ul>;
        return resultado;
    }

    return crearLista();

}

export default Lista;