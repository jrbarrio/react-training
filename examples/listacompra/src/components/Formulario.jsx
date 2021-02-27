import { useState } from 'react';

function Formulario(props) {

    const [productoState, setProductoState] = useState({
        nombre: '',
        categoria: 'carniceria'
    });

    function handleChange(event, field) {
        setProductoState({
            ...productoState,
            [field]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.tareaCreada(productoState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputProducto">Producto</label>
                    <input
                        type="text"
                        name=""
                        className="form-control"
                        id="inputProducto"
                        value={productoState.nombre}
                        onChange={(event) => handleChange(event, 'nombre')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="selectCategoria">Categoría</label>
                    <select
                        name="categoria"
                        id="selectCategoria"
                        className="form-control"
                        value={productoState.categoria}
                        onChange={(event) => handleChange(event, 'categoria')}
                    >
                        <option value="pescaderia">Pescadería</option>
                        <option value="carniceria">Carnicería</option>
                        <option value="panaderia">Panadería</option>
                        <option value="hogar">Hogar</option>
                    </select>
                </div>
                <input type="submit" value="Enviar" className="btn btn-block btn-info" />
            </form>
        </div>
    );
}

export default Formulario;